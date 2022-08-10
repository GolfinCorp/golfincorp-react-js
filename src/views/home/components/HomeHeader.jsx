import React from "react";
import { Flex, Button, Heading, Text, Box } from "@chakra-ui/react";
import { Logo } from "../../../components/atoms/icons";

const HomeHeader = () => {
  return (
    <Box position="relative" zIndex={10}>
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
