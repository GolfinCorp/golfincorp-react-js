import React from "react";
import { Flex } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const CustomButtom = () => {
  return (
    <Flex
      position="absolute"
      w="100vw"
      left={0}
      bottom={"-30px"}
      justify="center"
      align={"center"}
      zIndex={10}
    >
      <Flex
        w="60px"
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
