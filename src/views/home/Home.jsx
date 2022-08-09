import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import { Logo } from "../../components/atoms/icons";
import Container from "../../components/atoms/Container";

const Home = () => {
  return (
    <Container bgColor="#F0F0F0" h={"100vh"}>
      <Flex alignItems={"center"} justifyContent="space-between">
        <Logo w="131px" h="55px" />
        <Button variant="outlined">Iniciar Sesión</Button>
      </Flex>
    </Container>
  );
};

export default Home;
