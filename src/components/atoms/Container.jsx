import React from "react";
import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";
const Container = ({ children, ...props }) => {
  return (
    <Box
      w="100vw"
      px={{ base: "20px", md: "60px", lg: "124px" }}
      py={{ base: "20px", md: "20px", lg: "23px" }}
      {...props}
    >
      {children}
    </Box>
  );
};

Container.propType = {
  children: PropTypes.element,
  props: PropTypes.object,
};

export default Container;
