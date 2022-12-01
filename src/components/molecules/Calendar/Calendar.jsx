import { useState, useEffect } from 'react';
import { Box, Text, SimpleGrid, GridItem, Flex } from '@chakra-ui/react';
import { getDays } from './utils/getDays';
import { useToastNotification, useCalendar, useGames } from '@/hooks';
import Day from './Day';
import WeekHeader from './WeekHeader';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { getCurrentDate } from '@/helpers/getCurrentDate';
// Initial values declaration

const currentDate = getCurrentDate();
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
  // States and variables
  const { handleToast } = useToastNotification();
  const { getGamesByDate } = useGames();
  const { selectedDate, setNewSelected } = useCalendar();
  const [daysInMonth, setDaysInMonth] = useState(initialCalendarDates);
  const [date, setDate] = useState(currentDate);

  // Event handlers
  const handleSelectDate = (day) => {
    const isWeekend = day.getDay() === 0 || day.getDay() === 6;
    const today = getCurrentDate();
    if (day < today) return errors.pastDay(handleToast);
    if (isWeekend) return errors.weekend(handleToast);
    setNewSelected(day);
    getGamesByDate(day);
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
        <Box onClick={() => changeMonth(-1)} cursor="pointer">
          <MdChevronLeft />
        </Box>
        <Text textAlign={'center'} fontSize="20px">
          {date.toLocaleString('default', { month: 'long' })}
        </Text>
        <Box onClick={() => changeMonth(1)} cursor="pointer">
          <MdChevronRight />
        </Box>
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
              <Day day={day} selected={selectedDate} />
            </GridItem>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Calendar;
