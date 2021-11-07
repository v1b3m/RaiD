import { Box } from "@chakra-ui/react";
import Layout from "../../Layout";

const Login = () => {
  return (
    <Layout>
      <Box
        px={{ base: "1rem", md: "2rem", lg: "4rem", xl: "7.5rem" }}
        fontFamily="Nunito"
        mb="2rem"
      >
        Hello, World!
      </Box>
    </Layout>
  );
};

export default Login;
