import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import { MdAccessTime } from 'react-icons/md';
const EventCard = ({ game }) => {
  return (
    <Box
      p="3"
      border="2px solid"
      borderRadius="10px"
      borderColor="brand.100"
      cursor="pointer"
    >
      <Text fontSize="16px" fontWeight={'bold'}>
        Juego de Marco Elque Lolea
      </Text>
      <Text fontSize="14px" color="gray.500">
        Lorem ipsum dolor sit amet.
      </Text>
      <Flex justifyContent="space-between" mt="5" alignItems="center">
        <Text color="gray.500">5 people</Text>
        <Flex gap="2" justify={'center'} align="center" color="brand.primary">
          <MdAccessTime />
          <Text>08:00 - 09:30 AM</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default EventCard;
