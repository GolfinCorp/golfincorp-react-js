import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
const DateFlex = ({ children }) => {
  const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' });
  const weekday = date.toLocaleString('default', {
    weekday: 'long'
  });
  const day = date.toLocaleString('default', {
    day: 'numeric'
  });
  const year = date.toLocaleString('default', {
    year: 'numeric'
  });
  return (
    <Flex
      w="100%"
      flexDir={{ base: 'column', md: 'row' }}
      justifyContent={{ base: 'center', md: 'space-between' }}
      alignItems={{ base: 'start', md: 'center' }}
      gap={{ base: 5, md: 0 }}
      mb="5"
    >
      <Box
        w={{ base: '100%', md: 'auto' }}
        display={{ base: 'flex', md: 'block' }}
        alignItems={{ base: 'center', md: 'normal' }}
        justifyContent={{ base: 'space-between', md: 'normal' }}
      >
        <Text fontSize="24px">{month}</Text>
        <Text fontSize="16px" color="gray.500">
          {weekday} {day}, {year}
        </Text>
      </Box>
      <Box w={{ base: '100%', md: 'auto' }}>{children}</Box>
    </Flex>
  );
};

export default DateFlex;
