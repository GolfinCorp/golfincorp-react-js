import React, { Children } from "react";
import { Box } from "@chakra-ui/react";
const Layout = ({ children }) => {
  return <Box maxW="100vw">{children}</Box>;
};

export default Layout;
