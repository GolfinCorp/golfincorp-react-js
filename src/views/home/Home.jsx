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
  const entryAnimation = {
    y: ["0px", "20px", "0px"],
    opacity: ["0", "0", "1"],

    transition: "1s",
    x: "0px",
  };
  return (
    <Container
      bgColor={"#F0F0F0"}
      h={{ base: "96vh", md: "100vh" }}
      w="100vw"
      position={"relative"}
    >
      <HomeHeader />
      <HeroImg entryAnimation={entryAnimation} />
      <CustomButtom />
    </Container>
  );
};

export default Home;
