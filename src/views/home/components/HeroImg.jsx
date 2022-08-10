import React from "react";
import { Flex, Box, Img } from "@chakra-ui/react";
// imgs
import GolfText from "../../../assets/imgs/golf.png";
import circle from "../../../assets/imgs/circle.png";
import TWoods from "../../../assets/imgs/twoods.png";

const HeroImg = () => {
  return (
    <>
      <Box position="absolute" top="0" h="100vh" w="100vw" left="0">
        <Flex h="100%" align={"center"} justify="center">
          <Img src={GolfText} w="90%" maxW="600px" />
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
        <Img src={circle} w="80%" maxW="625px" mx="auto" />
      </Flex>
      <Flex
        position="absolute"
        w="100vw"
        right={{ base: "10%", lg: "5%" }}
        bottom={0}
        justify="center"
        align="center"
      >
        <Img src={TWoods} objectFit="contain" mx="auto" />
      </Flex>
    </>
  );
};

export default HeroImg;
