import { extendTheme } from "@chakra-ui/react";

export const baseTheme = extendTheme({
  styles: {
    global: {
      body: {
        maxW: "100vw",
        overflowX: "hidden",
      },
    },
  },
  colors: {
    brand: {
      primary: "#779D18",
      secondary: "#457EB2",
      dark: "#181816",
      gradient: "#3F3F3F",
      white: "#fafafa",
      100: "#DDDDDD",
    },
  },
  fonts: {
    heading: `'Bebas Neue', sans-serif`,
    body: `'DM Sans', sans-serif`,
  },
  components: {
    Button: {
      baseStyle: {},
      sizes: {
        sm: { minW: "80px" },
        md: { minW: "100px" },
        lg: { minW: "120px" },
      },
      variants: {
        primary: {
          backgroundColor: "brand.primary",
          borderRadius: "6px",
          fontWeight: "normal",
          color: "brand.white",
        },
        outlined: {
          bg: "transparent",
          border: "1px solid",
          borderColor: "brand.dark",
          cursor: "pointer",
          fontWeight: "normal",
          _hover: {
            backgroundColor: "brand.dark",
            color: "brand.white",
          },
        },
        ghost: {
          bg: "transparent",
          border: "none",
          _hover: {
            backgroundColor: "brand.dark",
            color: "brand.white",
            cursor: "pointer",
          },
        },
      },
    },
  },
});
