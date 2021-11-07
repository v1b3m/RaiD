import {
  Box,
  Text,
  Input,
  Flex,
  Center,
  Textarea,
  Grid,
} from "@chakra-ui/react";
import MyDropZone from "./MyDropZone";
import CustomButton from "../../CustomButton";
import { v4 as uuid4 } from "uuid";

const Analyze = () => {
  return (
    <Box fontSize={{ lg: "1.5rem" }} px={{ xl: "2.5rem" }}>
      <Grid my="1rem" templateColumns={{ base: "1fr 4fr" }}>
        <Text fontWeight="bold">ID:</Text>
        <Text>{uuid4()}</Text>
      </Grid>

      <Grid
        my="1rem"
        templateColumns={{ sm: "1fr 4fr", md: "1fr 4fr", lg: "1fr 4fr" }}
      >
        <Text fontWeight="bold">Description:</Text>
        <Textarea placeholder="Enter any information you want to associate with the radiograph(s)" />
      </Grid>

      <Grid
        my="1rem"
        templateColumns={{ sm: "1fr 4fr", md: "1fr 4fr", lg: "1fr 4fr" }}
      >
        <Text fontWeight="bold">Radiograph(s):</Text>
        <MyDropZone />
      </Grid>

      <Grid my="2rem" templateColumns={{ md: "1fr 4fr", lg: "1fr 4fr" }}>
        <Text />
        <CustomButton label="SUBMIT" props={{ w: { lg: "20rem" } }} />
      </Grid>
    </Box>
  );
};

export default Analyze;
