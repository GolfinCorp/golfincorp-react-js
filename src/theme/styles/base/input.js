import { defineStyleConfig } from '@chakra-ui/react';

const Input = defineStyleConfig({
  baseStyle: {
    field: {
      borderRadius: '14px',
      border: '2px solid',
      borderColor: 'brand.100'
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
