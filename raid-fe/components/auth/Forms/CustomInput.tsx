import {
  Box,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Text,
  useBoolean,
} from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { IconType } from "react-icons";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

interface Props {
  label: string;
  LeftIcon?: IconType;
  isPassword?: boolean;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isInvalid?: boolean;
  invalidText?: string;
}

const CustomInput = ({
  label,
  LeftIcon,
  isPassword,
  type,
  onChange,
  isInvalid,
  invalidText,
}: Props) => {
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
        <Input
          type={isPassword && !passwordFlag ? "password" : type}
          onChange={onChange}
          isInvalid={isInvalid}
        />
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
      {isInvalid && (
        <Text color="red.500" fontSize="sm" isTruncated maxW="460px">
          {invalidText}
        </Text>
      )}
    </Box>
  );
};

export default CustomInput;
