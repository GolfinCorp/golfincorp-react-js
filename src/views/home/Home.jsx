import React from "react";
import { Skeleton, SimpleGrid, Flex, Text } from "@chakra-ui/react";
// General Components
import Container from "../../components/atoms/Container";

// Local components
import HomeHeader from "./components/HomeHeader";
import HeroImg from "./components/HeroImg";
import CustomButtom from "./components/CustomButtom";

function Home() {
  const entryAnimation = {
    y: ["0px", "20px", "0px"],
    opacity: ["0", "0", "1"],

    transition: "1s",
    x: "0px",
  };
  return (
    <>
      <Container bgColor="#F0F0F0" minH="100vh" position="relative">
        <HomeHeader />
        <HeroImg entryAnimation={entryAnimation} />
        <CustomButtom />
      </Container>
      <Container my="10vh">
        <SimpleGrid columns={{ base: 1, md: 2 }} gap="2">
          <Flex justify="center" align="center">
            <Skeleton
              w="100%"
              h={{ base: "20vh", md: "40vh" }}
              borderRadius="6px"
              startColor="brand.primary"
              endColor="brand.dark"
              speed={"1.5"}
            />
          </Flex>
          <Flex justify="center" align="center">
            <Text>Proximamente...</Text>
          </Flex>
        </SimpleGrid>
      </Container>
    </>
  );
}

export default Home;
