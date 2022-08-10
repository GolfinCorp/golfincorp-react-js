import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Button = ({ content, click, ...props }) => {
  return (
    <ChakraButton
      variant={"primary"}
      onClick={click ? click : () => {}}
      {...props}
    >
      {content}
    </ChakraButton>
  );
};

ChakraButton.propTypes = {
  content: PropTypes.string,
  click: PropTypes.func,
  props: PropTypes.object,
};

export default Button;
