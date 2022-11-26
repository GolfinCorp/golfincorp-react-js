import React from 'react';
import { Box } from '@chakra-ui/react';
const Day = ({ selected, day }) => {
  const date = new Date();
  console.log(date.getMonth(), day.getMonth());
  const prevDay =
    day.getMonth() < date.getMonth() ||
    (day.getMonth() === date.getMonth() && day.getDate() < date.getDate());
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
            selected &&
            day.getDate() === selected.getDate() &&
            day.getMonth() === selected.getMonth()
              ? 'brand.primary'
              : 'transparent'
          }
          color={
            day.getDay() === 6 || day.getDay() === 0
              ? 'brand.100'
              : selected &&
                day.getDate() === selected.getDate() &&
                day.getMonth() === selected.getMonth()
              ? 'brand.white'
              : 'brand.dark'
          }
        >
          {day.getDate()}
        </Box>
      )}
    </>
  );
};

export default Day;
