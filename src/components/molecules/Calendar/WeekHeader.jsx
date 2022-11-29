import React from 'react';
import { GridItem, Text } from '@chakra-ui/react';
const WeekHeader = () => {
  const days = ['lun', 'mar', 'mie', 'jue', 'vie', 'sab', 'dom'];

  return (
    <>
      {days.map((day, index) => (
        <GridItem key={`${index}${day}`}>
          <Text fontSize="sm" textAlign="center" color="brand.100">
            {day}
          </Text>
        </GridItem>
      ))}
    </>
  );
};

export default WeekHeader;
