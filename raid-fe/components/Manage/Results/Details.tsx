import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  Image,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import dynamic from "next/dynamic";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { DetailsType, ParsedResults, Result, Upload } from ".";
import { backendURL } from "../../../config/fe";
import { UseAddPopup } from "../../../state/application/hooks";
import { UseLogout } from "../../../state/auth/hooks";
import { UseGetSession } from "../../../state/session/hooks";
import { PopupType } from "../../../types/PopUp";
import { scaleCloudinaryImage } from "../../../utils/cloudinary";
import { numberToPercentage } from "../../../utils/number";
import Section from "../Profile/Section";

interface Props {
  id: number;
  setActiveResult: Dispatch<SetStateAction<number>>;
}

interface Response {
  message: string;
  xray_upload: Upload;
  results: Result[];
}

const DynamicViewerWithNoSSR = dynamic(() => import("react-viewer"), {
  ssr: false,
});

const Details = ({ id, setActiveResult }: Props) => {
  const [details, setDetails] = useState<DetailsType[]>();
  const { data: session } = UseGetSession();
  const [activeImage, setActiveImage] = useState<string>();
  const addPopup = UseAddPopup();
  const logout = UseLogout();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClickImage = (src: string) => {
    setActiveImage(src);
    onOpen();
  };

  useEffect(() => {
    const getDetails = async () => {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.token}`,
      };
      const response = await fetch(`${backendURL}/uploads/${id}/results`, {
        method: "GET",
        headers,
      });
      if (response.status === 401) {
        addPopup({
          content: {
            summary: "Please login again to continue",
            title: "Session expired",
            type: PopupType.error,
          },
        });
        return logout();
      }
      const json = (await response.json()) as Response;
      const parsedResults = json.results.map(
        (result: Result) =>
          ({
            ...result,
            results: JSON.parse(result.results) as ParsedResults,
          } as DetailsType)
      );
      setDetails(parsedResults);
    };
    getDetails();

    let timeout: NodeJS.Timeout;

    if (details && details.length === 0) {
      timeout = setTimeout(() => {
        getDetails();
      }, 60000);
    }

    return () => clearTimeout(timeout);
  }, [JSON.stringify(details), id]);

  const leftProps = {
    fontWeight: "bold",
    color: "brand.maximumBlue",
  };

  console.log({ details });

  return (
    <Box p={{ lg: "2rem" }}>
      <Flex
        cursor="pointer"
        align="center"
        color="brand.maximumBlue"
        _hover={{ color: "brand.darkTurquoise" }}
        onClick={() => setActiveResult(null)}
        mb={3}
      >
        <BiArrowBack size={24} />
        <Text fontSize="xl">Go Back to Results</Text>
      </Flex>
      <Section left="ID" right={`${id}`} leftProps={leftProps} />
      {details?.length === 0 && (
        <Center minH="20rem" flexDir="column">
          <Text>Results still processing, please wait...</Text>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      )}
      {details?.map((detail: DetailsType, idx) => (
        <Box key={idx}>
          <Section
            left="Created"
            right={dayjs(detail.created_at).format("ddd Do MMM YYYY")}
            leftProps={leftProps}
          />
          <Text fontSize="2xl">Abnormalities detected</Text>
          {detail.results.map((result, idx) => (
            <Box maxW="20rem" mb="1rem">
              <Section
                left="Type"
                right={result.name}
                props={{ mb: "0.5rem" }}
                leftProps={leftProps}
              />
              <Section
                left="Confidence"
                right={`${numberToPercentage(result.confidence)}`}
                props={{ mb: "0.5rem" }}
                leftProps={leftProps}
              />
              <Divider />
            </Box>
          ))}
          <Text fontSize="2xl">Analyzed radiograph(s)</Text>
          <Grid
            templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
            gap="8px"
            mb="1rem"
          >
            {[detail.result_image].map((file) => (
              <Image
                cursor="pointer"
                key={file}
                src={scaleCloudinaryImage(file, 250, 300)}
                w="250px"
                h="300px"
                _hover={{
                  opacity: 0.5,
                }}
                onClick={() => onClickImage(file)}
              />
            ))}
          </Grid>
          <Text fontSize="2xl">Original Radiograph(s)</Text>
          <Grid
            templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
            gap="8px"
            mb="1rem"
          >
            {[detail.image].map((file) => (
              <Image
                cursor="pointer"
                key={file}
                src={scaleCloudinaryImage(file, 250, 300)}
                w="250px"
                h="300px"
                _hover={{
                  opacity: 0.5,
                }}
                onClick={() => onClickImage(file)}
              />
            ))}
          </Grid>

          <Divider />
        </Box>
      ))}
      <DynamicViewerWithNoSSR
        visible={isOpen}
        onClose={onClose}
        images={[activeImage].map((file) => ({ src: file, alt: "" }))}
      />
    </Box>
  );
};

export default Details;
