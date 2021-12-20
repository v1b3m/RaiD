import { Box, Flex } from "@chakra-ui/react";
import React from "react";

interface SectionProps {
  left: JSX.Element | string;
  right: JSX.Element | string;
}

export default function Section({ left, right }: SectionProps): JSX.Element {
  return (
    <Flex
      justify="space-between"
      maxW="37.5rem"
      fontWeight="400"
      fontSize="0.875rem"
      lineHeight="1.375rem"
      mb="1.75rem"
    >
      <Box textColor="brand.battleshipGray">{left}</Box>
      <Box textAlign="right">{right}</Box>
    </Flex>
  );
}
