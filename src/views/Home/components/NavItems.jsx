import { MenuItem, Box, Text } from '@chakra-ui/react';
import { shape, func, string } from 'prop-types';

function NavItems({ content, action }) {
  return (
    <MenuItem
      _hover={{ backgroundColor: 'transparent' }}
      _focus={{ backgroundColor: 'transparent' }}
    >
      <Box
        p={2}
        w="100%"
        borderRadius="6px"
        _hover={{ backgroundColor: 'brand.dark', color: 'white' }}
      >
        <Text onClick={action}>{content.name}</Text>
      </Box>
    </MenuItem>
  );
}

NavItems.defaultProp = {
  content: { name: '', route: '' },
  action: () => {}
};

NavItems.propTypes = {
  content: shape({
    name: string,
    route: string
  }),
  action: func
};

export default NavItems;
