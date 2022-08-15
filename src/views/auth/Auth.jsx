import React from "react";
import { useNavigate } from "react-router-dom";
// Components
import { Box, Input, Flex, Button, Checkbox, Text } from "@chakra-ui/react";
// Local components
import Container from "../../components/atoms/Container";
import { Logo } from "../../components/atoms/icons";
const Auth = () => {
  const navigate = useNavigate();
  return (
    <Box bgColor="#fafafa">
      <Container
        h="100vh"
        display={"flex"}
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <Box position="absolute" top="10">
          <Logo cursor="pointer" onClick={() => navigate("/")} />
        </Box>
        <Flex
          w="90%"
          maxW="460px"
          borderRadius="6px"
          p={5}
          gap={5}
          shadow="md"
          bgColor="brand.white"
          flexDir={"column"}
        >
          <Input placeholder="Correo" />
          <Input placeholder="Password" />
          <Checkbox color="brand.200" fontWeight={"100"}>
            Recuerdame
          </Checkbox>
          <Button
            w="50%"
            alignSelf={"center"}
            variant="primary"
            _hover={{ shadow: "lg" }}
          >
            Inicia Sesión
          </Button>
          <Box mt="3">
            <Text fontSize={"14px"} textAlign="center" cursor="pointer">
              ¿Miembro de un club{" "}
              <Text as="span" color="brand.primary">
                afiliado?
              </Text>{" "}
              Solicita tus datos
            </Text>
            <Text fontSize={"14px"} textAlign="center" mt="3" cursor="pointer">
              ¿Deseas registrar tu club en{" "}
              <Text as="span" color="brand.primary">
                Golfincorp
              </Text>
              ?
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Auth;
