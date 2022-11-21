import { defineStyleConfig } from '@chakra-ui/react';

const Button = defineStyleConfig({
  baseStyle: {
    background: 'brand.primary',
    borderRadius: '10px',
    fontWeight: 'normal',
    color: 'brand.dark'
  },
  sizes: {
    sm: { minW: '80px' },
    md: { minW: '100px' },
    lg: { minW: '120px' }
  },
  variants: {
    base: {
      color: 'brand.white'
    },
    outlined: {
      bg: 'transparent',
      border: '1px solid',
      borderColor: 'brand.dark',
      cursor: 'pointer',
      fontWeight: 'normal',
      _hover: {
        backgroundColor: 'brand.dark',
        color: 'brand.white'
      }
    },
    ghost: {
      bg: 'transparent',
      border: 'none',
      _hover: {
        backgroundColor: 'brand.dark',
        color: 'brand.white',
        cursor: 'pointer'
      }
    },
    'menu-button': {
      h: '40px',
      maxW: '40px',
      px: '0px',
      mx: '0px',
      bg: 'transparent',
      border: '1px solid',
      borderColor: 'brand.dark',
      cursor: 'pointer',
      fontWeight: 'normal',
      _hover: {
        backgroundColor: 'brand.dark',
        color: 'brand.white'
      }
    }
  },
  defaultProps: {
    variant: 'base'
  }
});

export default Button;
