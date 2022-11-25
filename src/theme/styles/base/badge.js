import { defineStyleConfig } from '@chakra-ui/react';

const Badge = defineStyleConfig({
  baseStyle: {
    backgroundColor: 'brand.100',
    borderRadius: 6,
    p: 2
  },
  variants: {
    base: {},
    success: {
      color: 'brand.badge.success.text',
      backgroundColor: 'brand.badge.success.bg'
    },
    danger: {
      color: 'brand.badge.danger.text',
      backgroundColor: 'brand.badge.danger.bg'
    },
    active: {
      color: 'brand.badge.active.text',
      backgroundColor: 'brand.badge.active.bg'
    },
    finished: {
      color: 'brand.badge.finished.text',
      backgroundColor: 'brand.badge.finished.bg'
    }
  },
  defaultProps: {
    variant: 'base'
  }
});
export default Badge;
