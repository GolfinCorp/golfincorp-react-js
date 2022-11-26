import React, { useState } from 'react';
import {
  Box,
  Text,
  SimpleGrid,
  GridItem,
  Flex,
  useToast
} from '@chakra-ui/react';
import { getDays } from './utils/getDays';
import Day from './Day';
const date = new Date();

const initialCalendarDates = getDays(date.getMonth(), date.getFullYear());
const initialMonth = {
  num: date.getMonth(),
  txt: date.toLocaleString('default', { month: 'long' })
};

const days = ['lun', 'mar', 'mie', 'jue', 'vie', 'sab', 'dom'];

const Calendar = () => {
  // States and variables
  const [selected, setSelected] = useState(null);
  const [daysInMonth, setDaysInMonth] = useState(initialCalendarDates);
  const [month, setMonth] = useState(initialMonth);
  const toast = useToast();

  // Event handlers
  const handleSelectDate = (day) => {
    if (
      day.getMonth() < date.getMonth() ||
      (day.getMonth() === date.getMonth() && day.getDate() < date.getDate())
    ) {
      toast({
        title: 'No disponible',
        description: 'No puedes agendar en días anteriores',
        status: 'error',
        duration: 9000,
        isClosable: true
      });
      return;
    }
    if (day.getDay() === 0 || day.getDay() === 6) {
      toast({
        title: 'No disponible',
        description: 'No se juega los finde :(',
        status: 'error',
        duration: 9000,
        isClosable: true
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
      <SimpleGrid columns={7}></SimpleGrid>
      <SimpleGrid columns={7} gap="2">
        {days.map((day, index) => (
          <GridItem key={`${index}${day}`}>
            <Text fontSize="sm" textAlign="center" color="brand.100">
              {day}
            </Text>
          </GridItem>
        ))}
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
