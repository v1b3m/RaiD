import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  HStack,
  Image,
  Spinner,
  Text,
  useBoolean,
  useDisclosure,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import dynamic from "next/dynamic";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { AiFillFilePdf } from "react-icons/ai";
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
import { html } from "./data";

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
  const [loading, setLoading] = useBoolean();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClickImage = (src: string) => {
    setActiveImage(src);
    onOpen();
  };

  const ref = useRef<HTMLDivElement>(null);

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
      }, 30000);
    }

    return () => clearTimeout(timeout);
  }, [JSON.stringify(details), id]);

  const leftProps = {
    fontWeight: "bold",
    color: "brand.maximumBlue",
  };

  const generatePdfReport = async () => {
    setLoading.on();
    const result = await fetch("https://pdf-gen-v.herokuapp.com/doc", {
      body: JSON.stringify({ html: html(ref.current.outerHTML) }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const pdf = await result.blob();
    const file = new File([pdf], "report.pdf", {
      type: "application/pdf",
    });
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = "report.pdf";
    link.click();
    setLoading.off();
  };

  return (
    <Box p={{ lg: "2rem" }} ref={ref} id="container">
      <Flex
        cursor="pointer"
        align="center"
        color="brand.maximumBlue"
        mb={3}
        justify="space-between"
        id="flex-wrapper-1"
      >
        <HStack
          onClick={() => setActiveResult(null)}
          _hover={{ color: "brand.darkTurquoise" }}
          className="h-stack-1"
        >
          <BiArrowBack size={24} />
          <Text fontSize="xl">Go Back to Results</Text>
        </HStack>

        <HStack
          onClick={() => generatePdfReport()}
          _hover={{ color: "brand.darkTurquoise" }}
          className="h-stack-1"
        >
          <Button
            leftIcon={<AiFillFilePdf size={24} />}
            isLoading={loading}
            background={"brand.raisinBlack.2"}
            _hover={{ background: "brand.raisinBlack.1" }}
          >
            Download Report
          </Button>
        </HStack>
      </Flex>
      <Section
        className="custom-section"
        left="ID"
        right={`${id}`}
        leftProps={leftProps}
      />
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
            className="custom-section"
            left="Created"
            right={dayjs(detail.created_at).format("ddd Do MMM YYYY")}
            leftProps={leftProps}
          />
          <Text fontSize="2xl" className="custom-2xl">
            Abnormalities detected
          </Text>
          {detail.results.map((result, idx) => (
            <Box maxW="20rem" mb="1rem">
              <Section
                className="custom-section"
                left="Type"
                right={result.name}
                props={{ mb: "0.5rem" }}
                leftProps={leftProps}
              />
              <Section
                className="custom-section"
                left="Confidence"
                right={`${numberToPercentage(result.confidence)}`}
                props={{ mb: "0.5rem" }}
                leftProps={leftProps}
              />
              <Divider />
            </Box>
          ))}
          <Grid
            templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
            mb={4}
            gap={4}
          >
            <Box>
              <Text fontSize="2xl" className="custom-2xl">
                Analyzed radiograph
              </Text>
              <Box className="image-container">
                <Image
                  cursor="pointer"
                  key={detail.result_image}
                  src={scaleCloudinaryImage(detail.result_image, 250, 300)}
                  w="250px"
                  h="300px"
                  _hover={{
                    opacity: 0.5,
                  }}
                  onClick={() => onClickImage(detail.result_image)}
                />
                <Box className="paper lined" />
              </Box>
            </Box>
            <Center>
              <Divider orientation="vertical" />
            </Center>
            <Box>
              <Text fontSize="2xl" className="custom-2xl">
                Original Radiograph
              </Text>
              <Box className="image-container">
                <Image
                  cursor="pointer"
                  key={detail.image}
                  src={scaleCloudinaryImage(detail.image, 250, 300)}
                  w="250px"
                  h="300px"
                  _hover={{
                    opacity: 0.5,
                  }}
                  onClick={() => onClickImage(detail.image)}
                />
                <Box className="paper lined" />
              </Box>
            </Box>
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
