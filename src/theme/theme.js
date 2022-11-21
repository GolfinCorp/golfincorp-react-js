import { extendTheme } from "@chakra-ui/react";
import { fonts, baseComponents, customComponents } from "./styles";

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
  fonts,
  components: {
    ...baseComponents,
    ...customComponents,
  },
});
