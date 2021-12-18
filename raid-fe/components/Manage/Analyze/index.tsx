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
import { cloudName, uploadPreset } from "../../../config";
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
}
type Value = Partial<State>;
type Key = keyof State;

interface Props {
  setActivePage: Dispatch<SetStateAction<IActivePage>>;
}

const Analyze: FC<Props> = ({ setActivePage }) => {
  const initialState = {
    files: [],
    base64: [],
    isLoading: false,
    description: "",
    id: uuid4(),
    activeImage: "",
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
    const result = await upload(state.files, cloudName, uploadPreset);
    console.log({ result });
    dispatch({ isLoading: false });
    setActivePage("results");
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
