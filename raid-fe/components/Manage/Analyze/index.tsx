import {
  Box,
  Grid,
  Image,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import _ from "lodash";
import dynamic from "next/dynamic";
import {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useReducer,
} from "react";
import { v4 as uuid4 } from "uuid";
import { cloudName, uploadPreset, backendURL } from "../../../config/fe";
import { useSession } from "../../../context/SessionContext";
import { HttpError } from "../../../error";
import { IActivePage } from "../../../types/manage";
import { toBase64, upload } from "../../../utils/cloudinary";
import CustomButton from "../../CustomButton";
import MyDropZone from "./MyDropZone";

const DynamicViewerWithNoSSR = dynamic(() => import("react-viewer"), {
  ssr: false,
});

interface State {
  files: File[];
  isLoading: boolean;
  description: string;
  id: string;
  base64: string[];
  activeImage: string;
  error: string;
}
type Value = Partial<State>;
type Key = keyof State;

interface Props {
  setActivePage: Dispatch<SetStateAction<IActivePage>>;
}

interface UploadResponse {
  message: string;
  error?: Record<string, unknown>;
}

const Analyze: FC<Props> = ({ setActivePage }) => {
  const { data: session } = useSession();
  const initialState = {
    files: [],
    base64: [],
    isLoading: false,
    description: "",
    id: uuid4(),
    activeImage: "",
    error: "",
  };
  const reducer = (state: State, value: Value) => ({ ...state, ...value });
  const [state, dispatch] = useReducer(reducer, initialState);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onChange = (key: Key) => (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({ [key]: e.target.value });
  };

  const setFiles = (files: File[]) =>
    dispatch({ files: _.uniqBy([...files, ...state.files], "name") });

  const onSubmit = async () => {
    dispatch({ isLoading: true });
    dispatch({ error: "" });
    try {
      const images = await upload(state.files, cloudName, uploadPreset);
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.token}`,
      };
      const body = JSON.stringify({
        description: state.description,
        images,
        uuid: state.id,
      });
      const response = await fetch(`${backendURL}/uploads/`, {
        body,
        method: "POST",
        headers,
      });
      if ([400, 500].includes(response.status)) {
        throw new HttpError(await response.text(), response.status);
      }
      (await response.json()) as UploadResponse;
      dispatch({ isLoading: false });
      setActivePage("results");
    } catch (error) {
      let message = (error as Error).message;
      if (message.includes(`description":["This field may not be blank.`)) {
        message = "Please enter a description";
      }
      if (message.includes(`"images":["empty values `)) {
        message = "Please upload at least one image";
      }
      dispatch({ error: message });
    } finally {
      dispatch({ isLoading: false });
    }
  };

  useEffect(() => {
    const convertToBase64 = async () => {
      const base64 = await Promise.all(
        state.files.map((file) => toBase64(file))
      );
      dispatch({ base64 });
    };
    convertToBase64();
  }, [state.files]);

  const onClickImage = (src: string) => {
    dispatch({ activeImage: src });
    onOpen();
  };

  return (
    <Box fontSize={{ lg: "1.5rem" }} px={{ xl: "2.5rem" }}>
      {state.error && (
        <Text color="red.500" fontSize="sm" maxW="460px">
          {state.error}
        </Text>
      )}
      <Grid my="1rem" templateColumns={{ base: "1fr 4fr" }}>
        <Text fontWeight="bold">ID:</Text>
        <Text>{state.id}</Text>
      </Grid>

      <Grid
        my="1rem"
        templateColumns={{ sm: "1fr 4fr", md: "1fr 4fr", lg: "1fr 4fr" }}
      >
        <Text fontWeight="bold">Description:</Text>
        <Textarea
          onChange={onChange("description")}
          placeholder="Enter any information you want to associate with the radiograph(s)"
        />
      </Grid>

      <Grid
        my="1rem"
        templateColumns={{ sm: "1fr 4fr", md: "1fr 4fr", lg: "1fr 4fr" }}
      >
        <Text fontWeight="bold">Radiograph(s):</Text>
        <MyDropZone files={state.files} setFiles={setFiles} />
      </Grid>

      {state.base64.length > 0 && (
        <Grid
          my="1rem"
          templateColumns={{ sm: "1fr 4fr", md: "1fr 4fr", lg: "1fr 4fr" }}
        >
          <Text fontWeight="bold">Preview(s):</Text>
          <Grid
            templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
            gap="8px"
          >
            {state.base64.map((file) => (
              <Image
                cursor="pointer"
                key={file}
                src={file}
                w="250px"
                h="300px"
                _hover={{
                  opacity: 0.5,
                }}
                onClick={() => onClickImage(file)}
              />
            ))}
          </Grid>
        </Grid>
      )}

      <Grid my="2rem" templateColumns={{ md: "1fr 4fr", lg: "1fr 4fr" }}>
        <Text />
        <CustomButton
          onClick={onSubmit}
          label="SUBMIT"
          props={{ w: { lg: "20rem" } }}
          isLoading={state.isLoading}
        />
      </Grid>

      <DynamicViewerWithNoSSR
        visible={isOpen}
        onClose={onClose}
        images={state.base64.map((file) => ({ src: file, alt: "" }))}
      />
    </Box>
  );
};

export default Analyze;
