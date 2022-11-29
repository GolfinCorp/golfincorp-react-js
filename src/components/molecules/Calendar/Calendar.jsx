import { useState, useEffect } from 'react';
import {
  Box,
  Text,
  SimpleGrid,
  GridItem,
  Flex,
  IconButton
} from '@chakra-ui/react';
import { getDays } from './utils/getDays';
import useToastNotification from '@/hooks/useToastNotification';
import Day from './Day';
import WeekHeader from './WeekHeader';

// Initial values declaration
const currentDate = new Date();
const initialCalendarDates = getDays(
  currentDate.getFullYear(),
  currentDate.getMonth()
);

const errors = {
  pastDay: (toastManager) => {
    toastManager('error', {
      title: 'No disponible',
      description: 'No puedes agendar en días anteriores'
    });
  },
  weekend: (toastManager) => {
    toastManager('error', {
      title: 'No disponible',
      description: 'No se juega los finde :('
    });
  }
};

const Calendar = () => {
  const { handleToast } = useToastNotification();
  // States and variables
  const [selected, setSelected] = useState(currentDate);
  const [daysInMonth, setDaysInMonth] = useState(initialCalendarDates);
  const [date, setDate] = useState(currentDate);

  // Event handlers
  const handleSelectDate = (day) => {
    const isWeekend = day.getDay() === 0 || day.getDay() === 6;
    if (day < currentDate) return errors.pastDay(handleToast);
    if (isWeekend) return errors.weekend(handleToast);
    setSelected(day);
  };

  const changeMonth = (differential) => {
    const newDate = new Date(date.setMonth(date.getMonth() + differential));
    setDate(newDate);
  };

  useEffect(() => {
    const newCalendar = getDays(date.getFullYear(), date.getMonth());
    setDaysInMonth(newCalendar);
  }, [date]);

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
        <IconButton onClick={() => changeMonth(-1)}></IconButton>
        <Text textAlign={'center'} fontSize="20px">
          {date.toLocaleString('default', { month: 'long' })}
        </Text>
        <IconButton onClick={() => changeMonth(1)}></IconButton>
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
