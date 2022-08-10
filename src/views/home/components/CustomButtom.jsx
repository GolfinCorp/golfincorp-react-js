import React from "react";
import { Flex, keyframes } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
const CustomButtom = () => {
  let buttonAnimation = {
    spring: {
      y: [5, -5],
      transition: {
        yoyo: Infinity,
        duration: 1.5,
      },
    },
  };
  return (
    <Flex
      position="absolute"
      w="100vw"
      left={0}
      bottom={"-30px"}
      justify="center"
      align={"center"}
      zIndex={5}

      // transition={{
      //   duration: 3,
      //   ease: "easeInOut",
      //   repeat: Infinity,
      //   repeatType: "yoyo",
      // }}
      // animate={{
      //   y: ["0px", "10px", "0px", "10px", "0px"],
      // }}
    >
      <Flex
        as={motion.div}
        w="60px"
        initial={{ rotate: 45 }}
        variants={buttonAnimation}
        animate={buttonAnimation.spring}
        h="60px"
        border={"4px solid"}
        borderColor="#F0F0F0"
        bgGradient={"linear-gradient(45deg, #181816 0%, #3F3F3F 96.54%)"}
        boxShadow="lg"
        transform="rotate(45deg)"
        justify={"center"}
        align="center"
        _hover={{ cursor: "pointer", boxShadow: "dark-lg" }}
      >
        <ChevronDownIcon
          color="brand.primary"
          transform="rotate(-45deg)"
          boxSize={"30px"}
        />
      </Flex>
    </Flex>
  );
};

export default CustomButtom;
