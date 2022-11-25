import React from 'react';
import { SimpleGrid, GridItem, Flex, Text, Box, Badge } from '@chakra-ui/react';
import { MdPerson } from 'react-icons/md';

const MatchCard = () => {
  return (
    <SimpleGrid
      columns={12}
      borderRadius="14px"
      shadow="md"
      backgroundColor="brand.50"
      p="5"
      cursor="pointer"
      alignItems="center"
    >
      <GridItem colSpan={4}>
        <Text>8:00 AM</Text>
      </GridItem>
      <GridItem colSpan={8}>
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Text>Disponible</Text>
          </Box>
          <Flex gap="6">
            <Badge variant="active">Status</Badge>
            <Flex justifyContent="center" alignItems="center" gap={3}>
              <MdPerson />
              <Text m="0px" p="0px">
                0
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </GridItem>
    </SimpleGrid>
  );
};

export default MatchCard;
