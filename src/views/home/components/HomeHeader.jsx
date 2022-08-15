import React from "react";
import {
  Flex,
  Button,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";

import { Logo, MinLogo } from "../../../components/atoms/icons";
import { motion } from "framer-motion";
const HomeHeader = () => {
  return (
    <Box
      position="relative"
      zIndex={10}
      as={motion.div}
      animate={{
        zIndex: 10,
        y: ["0px", "20px", "0px"],
        opacity: ["0", "0", "1"],
        transition: "1s",
        x: "0px",
      }}
    >
      {/* Desktop */}
      <Flex
        alignItems={"center"}
        justifyContent="space-between"
        display={{ base: "none", md: "flex" }}
      >
        <Logo w="131px" h="55px" _hover={{ cursor: "pointer" }} />
        <Button variant="outlined">Iniciar Sesión</Button>
      </Flex>
      {/* Mobile */}
      <Flex
        alignItems={"center"}
        justifyContent="space-between"
        display={{ base: "flex", md: "none" }}
      >
        <MinLogo w="55px" _hover={{ cursor: "pointer" }} />
        <Menu>
          <MenuButton
            as={Flex}
            py="10px"
            px="14px"
            borderRadius={"6px"}
            border="1px solid"
            borderColor="brand.dark"
            _hover={{
              bgColor: "brand.dark",
              color: "brand.white",
              cursor: "pointer",
            }}
          >
            <HamburgerIcon />
          </MenuButton>
          <MenuList m="0" p="0">
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
                <Text>Inicia Sesión</Text>
              </Box>
            </MenuItem>
            <MenuItem>Registra tu club</MenuItem>
            <MenuItem>Sobre nosotros</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default HomeHeader;
