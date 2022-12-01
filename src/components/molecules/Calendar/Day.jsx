import React from 'react';
import { Box } from '@chakra-ui/react';

const Day = ({ selected, day }) => {
  // Set hours is needed to include current day
  const date = new Date(new Date().setHours(0, 0, 0, 0));
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
          bgColor={
            day.getTime() === selected.getTime()
              ? 'brand.primary'
              : 'transparent'
          }
          color={dayColor(isWeekend, day.getTime() === selected.getTime())}
        >
          {day.getDate()}
        </Box>
      )}
    </>
  );
};

export default Day;
