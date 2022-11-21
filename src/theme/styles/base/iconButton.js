import { defineStyleConfig } from "@chakra-ui/react";

const IconButton = defineStyleConfig({
  baseStyle: {
    maxW: "50px",
    h: "50px",
    backgroundColor: "transparent",
    border: "1px solid",
    borderColor: "brand.primary",
  },
  sizes: {
    sm: { minW: "50px" },
    md: { minW: "50px" },
    lg: { minW: "50px" },
  },
  variants: {
    base: {},
  },
  defaultProps: {
    variant: "base",
  },
});

export default IconButton;
