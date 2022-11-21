import { ChakraProvider } from '@chakra-ui/react';
import { baseTheme } from './theme/theme.js';
import AppRoutes from './routes/AppRoutes.jsx';
import ContextsProvider from './contexts';

function App() {
  return (
    <ContextsProvider>
      <ChakraProvider theme={baseTheme}>
        <AppRoutes />
      </ChakraProvider>
    </ContextsProvider>
  );
}

export default App;
