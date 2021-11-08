import { Button, ButtonProps } from "@chakra-ui/react";

interface Props {
  label: string;
  props?: ButtonProps;
  onClick?: () => void;
  isDisabled?: boolean;
}

export default function CustomButton({
  props,
  label,
  onClick,
  isDisabled,
}: Props) {
  return (
    <Button
      isDisabled={isDisabled}
      onClick={onClick}
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
