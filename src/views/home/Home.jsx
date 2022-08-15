import React from "react";
import { Box, Skeleton, SimpleGrid, Text } from "@chakra-ui/react";
// General Components
import Container from "../../components/atoms/Container";

// Local components
import HomeHeader from "./components/HomeHeader";
import HeroImg from "./components/HeroImg";
import CustomButtom from "./components/CustomButtom";

const Home = () => {
  const entryAnimation = {
    y: ["0px", "20px", "0px"],
    opacity: ["0", "0", "1"],

    transition: "1s",
    x: "0px",
  };
  return (
    <Container bgColor={"#F0F0F0"} h="100vh" position={"relative"}>
      <HomeHeader />
      <HeroImg entryAnimation={entryAnimation} />
      <CustomButtom />
      <SimpleGrid
        position="relative"
        top={{ base: "80vh", md: "100vh" }}
        columns={2}
        gap="2"
        mb
      >
        <Skeleton w="100%" h={{ base: "20vh", md: "40vh" }} />
        <Box>
          <Text>This is my component</Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default Home;
