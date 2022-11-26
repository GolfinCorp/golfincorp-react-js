import DateFlex from '@/components/molecules/Date';
import { Searchbar } from '@/components/atoms';
import { HourSchedule } from '@/components/organisms';
import {
  Divider,
  SimpleGrid,
  GridItem,
  Box,
  Text,
  useToast
} from '@chakra-ui/react';
import { useState } from 'react';

const Calendar = () => {
  const [selected, setSelected] = useState(null);
  const toast = useToast();
  function getDaysInMonth(month, year) {
    const date = new Date(year, month, 1);
    let days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    const firstDay = days[0].getDay();
    const finalDay = days[days.length - 1].getDay();
    if (firstDay === 0) {
      days = [...Array(6).fill(null), ...days];
    } else {
      days = [...Array(firstDay - 1).fill(null), ...days];
    }
    if (finalDay === 0) {
      return days;
    } else {
      days = [...days, ...Array(7 - finalDay).fill(null)];
    }
    return days;
  }
  const currentDate = new Date();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const daysInMonth = getDaysInMonth(
    currentDate.getMonth(),
    currentDate.getFullYear()
  );

  const handleSelectDate = (day) => {
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
    setSelected(day.getDate());
  };

  return (
    <>
      <DateFlex>
        <Searchbar />
      </DateFlex>

      <Divider border="2px" />
      <SimpleGrid my="5" columns={12} gap={1}>
        <GridItem colSpan={{ base: 12, md: 5, lg: 4, xl: 2 }}>
          <Box
            border="2px solid"
            borderColor="brand.100"
            px="2"
            py="4"
            borderRadius="10px"
          >
            <Text textAlign={'center'} fontSize="20px" mb="3">
              {month}
            </Text>
            <SimpleGrid columns={7}></SimpleGrid>
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
                    <Box
                      borderRadius="8px"
                      p="1"
                      bgColor={
                        day && day.getDate() === selected
                          ? 'brand.primary'
                          : 'transparent'
                      }
                      color={
                        day === null || day.getDay() === 6 || day.getDay() === 0
                          ? 'brand.100'
                          : day.getDate() === selected
                          ? 'brand.white'
                          : 'brand.dark'
                      }
                    >
                      {day === null ? '-' : day.getDate()}
                    </Box>
                  </GridItem>
                );
              })}
            </SimpleGrid>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 7, lg: 8, xl: 10 }}>
          <HourSchedule />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default Calendar;
