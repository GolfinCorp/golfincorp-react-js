import React, { useState } from 'react';
import { Box, Text, SimpleGrid, GridItem, Flex } from '@chakra-ui/react';
import { getDays } from './utils/getDays';
import useToastNotification from '@/hooks/useToastNotification';
import Day from './Day';
import WeekHeader from './WeekHeader';
// Initial values declaration
const date = new Date();
const initialCalendarDates = getDays(date.getMonth(), date.getFullYear());
const initialMonth = {
  num: date.getMonth(),
  txt: date.toLocaleString('default', { month: 'long' })
};

const Calendar = () => {
  const { handleToast } = useToastNotification();
  // States and variables
  const [selected, setSelected] = useState(date);
  const daysInMonth = initialCalendarDates;
  const month = initialMonth;
  // const [daysInMonth, setDaysInMonth] = useState(initialCalendarDates);
  // const [month, setMonth] = useState(initialMonth);

  // Event handlers
  const handleSelectDate = (day) => {
    if (
      day.getMonth() < date.getMonth() ||
      (day.getMonth() === date.getMonth() && day.getDate() < date.getDate())
    ) {
      handleToast('error', {
        title: 'No disponible',
        description: 'No puedes agendar en días anteriores'
      });
      return;
    }
    if (day.getDay() === 0 || day.getDay() === 6) {
      handleToast('error', {
        title: 'No disponible',
        description: 'No se juega los finde :('
      });
      return;
    }
    setSelected(day);
  };

  return (
    <Box
      border="2px solid"
      borderColor="brand.100"
      px="2"
      my="5"
      py="5"
      borderRadius="10px"
    >
      <Flex alignItems="center" justifyContent="center" gap={5} mb="3">
        <Text textAlign={'center'} fontSize="20px">
          {month.txt}
        </Text>
      </Flex>
      <SimpleGrid columns={7}>
        <WeekHeader />
      </SimpleGrid>
      <SimpleGrid columns={7} gap="2">
        {daysInMonth?.map((day, index) => {
          return (
            <GridItem
              key={index}
              colSpan={1}
              textAlign="center"
              cursor="pointer"
              onClick={() => {
                handleSelectDate(day);
              }}
            >
              <Day day={day} selected={selected} />
            </GridItem>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Calendar;
