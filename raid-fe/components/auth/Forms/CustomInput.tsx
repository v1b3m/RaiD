import {
  Box,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Text,
  useBoolean,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

interface Props {
  label: string;
  LeftIcon?: IconType;
  isPassword?: boolean;
  type?: string;
}

const CustomInput = ({ label, LeftIcon, isPassword, type }: Props) => {
  const [passwordFlag, setPasswordFlag] = useBoolean();

  return (
    <Box mb={{ lg: "0.5rem", xl: "1rem" }}>
      <Text mb="0.5rem">{label}</Text>
      <InputGroup>
        {LeftIcon && (
          <InputLeftAddon bg="brand.spaceCadet">
            <LeftIcon size={24} />
          </InputLeftAddon>
        )}
        <Input type={isPassword && !passwordFlag ? "password" : type} />
        {isPassword && (
          <InputRightAddon bg="brand.spaceCadet">
            {passwordFlag && (
              <Box onClick={setPasswordFlag.off}>
                <MdVisibility size={24} />
              </Box>
            )}
            {!passwordFlag && (
              <Box onClick={setPasswordFlag.on}>
                <MdVisibilityOff size={24} />
              </Box>
            )}
          </InputRightAddon>
        )}
      </InputGroup>
    </Box>
  );
};

export default CustomInput;
