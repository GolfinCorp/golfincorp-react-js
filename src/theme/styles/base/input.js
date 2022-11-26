import { defineStyleConfig } from '@chakra-ui/react';

const Input = defineStyleConfig({
  baseStyle: {
    field: {
      borderRadius: 'card',
      border: '1px',
      borderColor: 'transparent',
      backgroundColor: '#fafafa',
      _focus: {
        borderColor: 'brand.primary'
      },
      _hover: {
        borderColor: 'brand.primary'
      }
    }
  },
  variants: {
    base: {},
    auth: {
      borderColor: 'brand.dark',
      backgroundColor: 'red'
    }
  },
  defaultProps: { variant: 'base' }
});

export default Input;
