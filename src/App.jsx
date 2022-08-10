import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { baseTheme } from "./theme/theme.js";
import AppRoutes from "./routes/AppRoutes.jsx";
function App() {
  return (
    <>
      <ChakraProvider theme={baseTheme}>
        <AppRoutes />
      </ChakraProvider>
    </>
  );
}

export default App;
