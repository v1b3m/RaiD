import { Box, BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";

interface Props {
  children: ReactNode;
  headerProps?: BoxProps;
}

export default function Layout({ children, headerProps }: Props) {
  return (
    <Box bg="brand.raisinBlack" minH="100vh" textColor="brand.cultured">
      <Header props={headerProps} />
      {children}
      <Footer />
    </Box>
  );
}
