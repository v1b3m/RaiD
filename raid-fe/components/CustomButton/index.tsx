import { Button, ButtonProps } from "@chakra-ui/react";

interface Props {
  label: string;
  props?: ButtonProps;
}

export default function CustomButton({ props, label }: Props) {
  return (
    <Button
      mx="2rem"
      bg="brand.greenRYB"
      textColor="brand.cultured"
      _hover={{
        bg: "brand.teaGreen",
        textColor: "brand.raisinBlack",
      }}
      boxShadow="0 0 10px #6DAE1F"
      {...props}
    >
      {label}
    </Button>
  );
}
