import {
  Box,
  Checkbox,
  Flex,
  Grid,
  Image,
  Text,
  useBoolean,
} from "@chakra-ui/react";
import { MdEmail, MdLock } from "react-icons/md";
import CustomButton from "../../CustomButton";
import CustomLink from "../../Text/Link";
import CustomInput from "./CustomInput";

const Login = () => {
  const [isRegistered, setIsRegistered] = useBoolean();

  return (
    <Grid
      templateColumns={{ lg: "repeat(2, 1fr)" }}
      gap="0"
      bg="brand.spaceCadet"
      borderRadius={{ base: "1rem", md: "2rem", lg: "4rem" }}
    >
      <Image
        src="/20211107_170648.jpg"
        borderTopLeftRadius={{ base: "1rem", md: "2rem", lg: "4rem" }}
        borderBottomLeftRadius={{ lg: "4rem" }}
        borderTopRightRadius={{ base: "1rem", md: "2rem", lg: "0" }}
      />
      <Flex
        px={{ base: "1rem", md: "2rem", xl: "4rem" }}
        py={{ base: "1rem", md: "2rem", xl: "4rem" }}
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        fontSize={{ xl: "1.2rem" }}
      >
        <Box minW={{ lg: "29.343rem" }}>
          <Text
            fontWeight="bold"
            fontSize={{
              base: "1.5rem",
              md: "2rem",
              xl: "3rem",
            }}
          >
            {!isRegistered ? "Get started" : "Welcome back"}
          </Text>
          <Box my={{ base: "0.5rem", xl: "1rem" }}>
            <Text display="inline" textColor="brand.coolGrey">
              {!isRegistered ? "Already" : "Don't"} have an account?{" "}
            </Text>
            <CustomLink
              label={!isRegistered ? "Log In" : "Register"}
              props={{ display: "inline" }}
              onClick={setIsRegistered[isRegistered ? "off" : "on"]}
            />
          </Box>

          <Box>
            <CustomInput label="Email address" LeftIcon={MdEmail} />
            <CustomInput label="Password" LeftIcon={MdLock} isPassword />

            {!isRegistered && (
              <Box>
                <Checkbox mb="1.5rem">
                  <Box fontSize={{ xl: "1.2rem" }}>
                    <Text display="inline" textColor="brand.coolGrey">
                      I agree to Raid's
                    </Text>
                    <CustomLink
                      label=" Terms of Service"
                      props={{ display: "inline" }}
                    />
                    <Text display="inline" textColor="brand.coolGrey">
                      {" "}
                      and
                    </Text>
                    <CustomLink
                      label=" Privacy Policy"
                      props={{ display: "inline" }}
                    />
                  </Box>
                </Checkbox>
              </Box>
            )}
            <CustomButton
              label={isRegistered ? "Login" : "Register"}
              props={{ width: "100%" }}
            />
          </Box>
        </Box>
      </Flex>
    </Grid>
  );
};

export default Login;
