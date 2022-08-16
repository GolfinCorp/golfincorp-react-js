import React from "react";
// ? components
import {
  Flex,
  Button,
  Box,
  Menu,
  MenuButton,
  MenuList,
  useToast,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
// ? local components
import NavItems from "./NavItems";
import { Logo, MinLogo } from "../../../components/atoms/icons";

function HomeHeader() {
  // * Hooks declaration
  const toast = useToast();

  // * State declaration

  // * Variable declarations
  const navItems = [
    { name: "Inicia Sesión", route: "/login" },
    { name: "Registra tu club", route: "/" },
    { name: "Sobre nosotros", route: "/" },
  ];

  // * Event handlers
  const handleClick = () => {
    toast({
      title: "En construcción",
      status: "warning",
      position: "top",
    });
  };

  // * Initial Load

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
        alignItems="center"
        justifyContent="space-between"
        display={{ base: "none", md: "flex" }}
      >
        <Logo w="131px" h="55px" _hover={{ cursor: "pointer" }} />
        <Button variant="outlined" onClick={handleClick}>
          Iniciar Sesión
        </Button>
      </Flex>
      {/* Mobile */}
      <Flex
        alignItems="center"
        justifyContent="space-between"
        display={{ base: "flex", md: "none" }}
      >
        <MinLogo w="55px" _hover={{ cursor: "pointer" }} />
        <Menu>
          <MenuButton
            as={Flex}
            py="10px"
            px="14px"
            borderRadius="6px"
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
            {navItems.map((item) => (
              <NavItems
                content={item}
                action={handleClick}
                key={`${Math.random() * 10 + 1}${item.route}`}
              />
            ))}
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
}

export default HomeHeader;
