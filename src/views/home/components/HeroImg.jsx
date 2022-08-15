import React from "react";
import { PropTypes } from "prop-types";
import { Flex, Box, Img, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
// imgs
import GolfText from "../../../assets/imgs/golf.png";
import circle from "../../../assets/imgs/circle.png";
import TWoods from "../../../assets/imgs/twoods.png";

const HeroImg = ({ entryAnimation }) => {
  return (
    <>
      <Flex
        mt={{ base: "20vh", sm: "15vh", md: "5vh" }}
        justify="center"
        as={motion.div}
        animate={entryAnimation}
      >
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
      <Box
        position="absolute"
        top="0"
        h="100vh"
        w="100vw"
        left="0"
        as={motion.div}
        animate={entryAnimation}
      >
        <Flex h="100%" align={"center"} justify="center">
          <Img src={GolfText} w="90%" maxW={{ base: "400px", lg: "600px" }} />
        </Flex>
      </Box>
      <Flex
        position="absolute"
        w="100vw"
        left={0}
        bottom={0}
        justify="center"
        align="center"
      >
        <Img
          src={circle}
          w="80%"
          maxW={{ base: "400px", lg: "600px" }}
          mx="auto"
        />
      </Flex>
      <Flex
        as={motion.div}
        animate={{
          y: ["0px", "20px", "0px"],
          opacity: ["0", "0", "1"],

          transition: "1s",
          x: "0px",
        }}
        position="absolute"
        w="100vw"
        right={{ base: "10%", md: "7%", lg: "5%" }}
        bottom={0}
        justify="center"
        align="center"
      >
        <Img
          src={TWoods}
          objectFit="contain"
          mx="auto"
          maxW={{ base: "400px", lg: "600px" }}
        />
      </Flex>
    </>
  );
};

HeroImg.propTypes = {
  entryAnimation: PropTypes.object,
};

export default HeroImg;
