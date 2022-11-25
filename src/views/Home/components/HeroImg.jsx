import { object } from 'prop-types';
import { Flex, Box, Img, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
// imgs
import GolfText from '@/assets/imgs/golf.png';
import circle from '@/assets/imgs/circle.png';
import TWoods from '@/assets/imgs/twoods.png';

const HeroImg = ({ entryAnimation }) => {
  return (
    <>
      <Flex
        mt={{ base: '20vh', sm: '15vh', md: '5vh' }}
        justify="center"
        as={motion.div}
        animate={entryAnimation}
        position="relative"
        zIndex="10"
      >
        <Heading
          as={'h2'}
          fontSize="24px"
          fontWeight={'600'}
          display="flex"
          gap="2"
        >
          <Text>RESERVA</Text> <Text color="brand.primary">AHORA</Text>
        </Heading>
      </Flex>
      <Box
        position="absolute"
        top="10"
        h="100vh"
        w="100vw"
        left="0"
        as={motion.div}
        animate={entryAnimation}
        zIndex="1"
      >
        <Flex h="100%" align={'center'} justify="center">
          <Img src={GolfText} w="90%" maxW={{ base: '1000px', lg: '1000px' }} />
        </Flex>
      </Box>
      <Flex
        position="absolute"
        w="100vw"
        left={0}
        bottom={0}
        justify="center"
        align="center"
        zIndex={'0'}
      >
        <Img src={circle} w="800px" mx="auto" />
      </Flex>
      <Flex
        as={motion.div}
        animate={{
          y: ['0px', '20px', '0px'],
          opacity: ['0', '0', '1'],

          transition: '1s',
          x: '0px'
        }}
        position="absolute"
        w="100vw"
        zIndex="2"
        right={{ base: '10%', md: '7%', lg: '5%' }}
        bottom={0}
        justify="center"
        align="center"
      >
        <Img
          src={TWoods}
          objectFit="contain"
          mx="auto"
          w={{ base: '800px', lg: '1100px' }}
        />
      </Flex>
    </>
  );
};

HeroImg.propTypes = {
  entryAnimation: object
};

export default HeroImg;
