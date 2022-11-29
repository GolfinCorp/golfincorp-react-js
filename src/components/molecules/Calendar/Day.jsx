import React from 'react';
import { Box } from '@chakra-ui/react';

const Day = ({ selected, day }) => {
  const date = new Date();
  const prevDay = day < date;
  const isWeekend = day.getDay() === 6 || day.getDay() === 0;

  const dayColor = (weekend, select) => {
    if (weekend) return 'brand.100';
    if (select) return 'brand.white';
    return 'brand.dark';
  };

  return (
    <>
      {prevDay ? (
        <Box
          borderRadius="8px"
          p="1"
          backgroundColor="brand.50"
          color="brand.100"
        >
          {day.getDate()}
        </Box>
      ) : (
        <Box
          borderRadius="8px"
          p="1"
          bgColor={day === selected ? 'brand.primary' : 'transparent'}
          color={dayColor(isWeekend, selected === day)}
        >
          {day.getDate()}
        </Box>
      )}
    </>
  );
};

export default Day;
