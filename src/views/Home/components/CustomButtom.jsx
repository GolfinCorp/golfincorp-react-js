import React from 'react';
import { Flex, keyframes, useStyleConfig } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
const CustomButtom = () => {
  const buttonAnimation = {
    spring: {
      y: [5, -5],
      transition: {
        yoyo: Infinity,
        duration: 1.5
      }
    }
  };

  const styles = {
    container: useStyleConfig('animated_button_container'),
    button: useStyleConfig('animated_button'),
    icon: useStyleConfig('animated_icon')
  };
  return (
    <Flex __css={styles.container}>
      <Flex
        __css={styles.button}
        as={motion.div}
        initial={{ rotate: 45 }}
        variants={buttonAnimation}
        animate={buttonAnimation.spring}
      >
        <ChevronDownIcon __css={styles.icon} />
      </Flex>
    </Flex>
  );
};

export default CustomButtom;
