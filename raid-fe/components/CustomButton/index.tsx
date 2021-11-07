import { Button, ButtonProps } from "@chakra-ui/react";

interface Props {
  label: string;
  props?: ButtonProps;
}

export default function CustomButton({ props, label }: Props) {
  return (
    <Button
      bg="brand.greenRYB"
      textColor="brand.cultured"
      _hover={{
        bg: "brand.teaGreen",
        textColor: "brand.blueCrayola",
      }}
      boxShadow="0 0 10px #3D7BFA"
      {...props}
    >
      {label}
    </Button>
  );
}
