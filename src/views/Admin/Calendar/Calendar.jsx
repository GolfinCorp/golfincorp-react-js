import DateFlex from '@/components/molecules/Date';
import { Searchbar } from '@/components/atoms';
import { HourSchedule } from '@/components/organisms';
import { Divider, SimpleGrid, GridItem, Box } from '@chakra-ui/react';

const Calendar = () => {
  function getDaysInMonth(month, year) {
    const date = new Date(year, month, 1);
    let days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    let firstDay = days[0].getDay();
    let finalDay = days[days.length - 1].getDay();
    if (firstDay === 0) {
      days = [...Array(6).fill(null), ...days];
      return days;
    }
    days = [...Array(firstDay - 1).fill(null), ...days];
    return days;
  }
  const currentDate = new Date();
  const daysInMonth = getDaysInMonth(
    currentDate.getMonth(),
    currentDate.getFullYear()
  );

  return (
    <>
      <DateFlex>
        <Searchbar />
      </DateFlex>

      <Divider border="2px" />
      <SimpleGrid my="5" columns={12} gap={1}>
        <GridItem colSpan={{ base: 12, md: 4 }}>
          <Box p="5">
            <SimpleGrid columns={7}>
              {daysInMonth?.map((day, index) => {
                return (
                  <GridItem key={index} colSpan={1}>
                    {day === null ? 'XD' : day.getDay()}
                  </GridItem>
                );
              })}
            </SimpleGrid>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 8 }}>
          <HourSchedule />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default Calendar;
