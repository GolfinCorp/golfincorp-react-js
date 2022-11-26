import { extendTheme } from '@chakra-ui/react';
import { fonts, baseComponents, customComponents } from './styles';

export const baseTheme = extendTheme({
  styles: {
    global: {
      body: {
        maxW: '100vw',
        overflowX: 'hidden'
      }
    }
  },
  colors: {
    brand: {
      primary: '#779D18',
      secondary: '#457EB2',
      dark: '#181816',
      gradient: '#3F3F3F',
      white: '#fafafa',
      badge: {
        success: {
          bg: '#edf7ed',
          text: '#00CC08'
        },
        danger: {
          bg: '#f8f3ed',
          text: '#e67c00'
        },
        active: {
          bg: '#edf1f7',
          text: '#0052cc'
        },
        finished: {
          bg: '#f7edf4',
          text: '#cc0093'
        }
      },
      100: '#DDDDDD',
      50: '#f9f9f9'
    }
  },
  radii: {
    none: '0',
    sm: '2px',
    base: '4px',
    md: '6px',
    card: '18px'
  },
  fonts,
  components: {
    ...baseComponents,
    ...customComponents
  }
});
