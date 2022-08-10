import React from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
// General Components
import Container from "../../components/atoms/Container";
// Local components
import HomeHeader from "./components/HomeHeader";
import HeroImg from "./components/HeroImg";
import CustomButtom from "./components/CustomButtom";
const Home = () => {
  return (
    <Container
      bgColor={"#F0F0F0"}
      h={{ base: "96vh", md: "100vh" }}
      position={"relative"}
    >
      <Box>
        <HomeHeader />
      </Box>
      <Box>
        <HeroImg />
      </Box>
      <Box></Box>
      <CustomButtom />
    </Container>
  );
};

export default Home;
