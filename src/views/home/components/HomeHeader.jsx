import React from "react";
import { Flex, Button, Heading, Text, Box } from "@chakra-ui/react";
import { Logo } from "../../../components/atoms/icons";
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
      <Flex alignItems={"center"} justifyContent="space-between">
        <Logo w="131px" h="55px" _hover={{ cursor: "pointer" }} />
        <Button variant="outlined">Iniciar Sesión</Button>
      </Flex>
      <Flex mt={{ base: "20vh", sm: "15vh", md: "10vh" }} justify="center">
        <Heading
          as={"h2"}
          fontSize="24px"
          fontWeight={"600"}
          display="flex"
          gap="2"
        >
          <Text color="brand.primary">RESERVA</Text> <Text>AHORA</Text>
        </Heading>
      </Flex>
    </Box>
  );
};

export default HomeHeader;
