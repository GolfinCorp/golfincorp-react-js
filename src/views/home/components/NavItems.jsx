import React from "react";
import { MenuItem, Box, Text } from "@chakra-ui/react";
import { PropTypes } from "prop-types";

function NavItems({ content, action }) {
  return (
    <MenuItem
      _hover={{ backgroundColor: "transparent" }}
      _focus={{ backgroundColor: "transparent" }}
    >
      <Box
        p={2}
        w="100%"
        borderRadius="6px"
        _hover={{ backgroundColor: "brand.dark", color: "white" }}
      >
        <Text onClick={action}>{content.name}</Text>
      </Box>
    </MenuItem>
  );
}

NavItems.propTypes = {
  content: PropTypes.object,
  action: PropTypes.function,
};
NavItems.defaultProp = {
  content: { name: "", route: "" },
  action: () => {},
};

export default NavItems;
