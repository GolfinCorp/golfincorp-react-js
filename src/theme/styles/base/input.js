import { defineStyleConfig } from "@chakra-ui/react";

const Input = defineStyleConfig({
  baseStyle: {
    backgroundColor: "brand.primary",
  },
  variants: {
    base: {},
    auth: {
      borderColor: "brand.dark",
      backgroundColor: "red",
    },
  },
  defaultProps: { variant: "base" },
});

export default Input;
