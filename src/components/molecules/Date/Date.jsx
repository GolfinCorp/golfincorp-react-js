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
    <Flex w="100%" justifyContent="space-between">
      <Box>
        <Text fontSize="24px">{month}</Text>
        <Text fontSize="16px" color="gray.500">
          {weekday} {day}, {year}
        </Text>
      </Box>
      <Box>{children}</Box>
    </Flex>
  );
};

export default DateFlex;
