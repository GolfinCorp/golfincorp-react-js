import React from 'react';
import { Circle, Box, Center, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { createYoyo } from '@/components/animations';
const Ball = ({ ballSize = 30, fieldSize = 300, height = 200 }) => {
  const animationX = fieldSize - ballSize;
  const yoyoAnimation = createYoyo(5, 'loop');
  const xAnimate = useBreakpointValue({
    base: `${animationX}px`
  });
  const ballAnimation = {
    x: ['-30px', xAnimate, xAnimate],
    opacity: [1, 1, 0, 0],
    y: ['0px', '0px', '30px', '30px'],
    transition: yoyoAnimation
  };
  return (
    <>
      <Center h={`${height}px`}>
        <Box
          w={`${fieldSize}px`}
          borderBottom="2px solid"
          borderColor="brand.primary"
          position="relative"
          zIndex="2"
        >
          <Box
            position="absolute"
            bottom="0"
            zIndex="-1"
            as={motion.div}
            animate={ballAnimation}
          >
            <Circle
              w={`${ballSize}px`}
              h={`${ballSize}px`}
              border="1px solid"
            />
          </Box>
          <Box
            position="absolute"
            bottom="0px"
            w="30px"
            display="flex"
            justifyContent="center"
            align="center"
            borderBottom={'2px solid black'}
            right="0px"
            h="50px"
          >
            <Box
              h="100px"
              bgColor="black"
              w="2px"
              position="absolute"
              bottom="0"
            >
              <Box
                w="30px"
                h="30px"
                position="absolute"
                right="0"
                backgroundColor="red"
                clipPath={'polygon(100% 0, 0 54%, 100% 100%)'}
              />
            </Box>
            <Box
              bottom="-64px"
              backgroundColor="white"
              position="absolute"
              h="60px"
              w={`${ballSize}px`}
            />
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default Ball;
