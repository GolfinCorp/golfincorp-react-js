import DateFlex from '@/components/molecules/Date';
import { Searchbar, EventCard } from '@/components/atoms';
import { HourSchedule } from '@/components/organisms';
import { Divider, SimpleGrid, GridItem } from '@chakra-ui/react';
import { Calendar } from '@/components/molecules';
const CalendarDashboard = () => {
  return (
    <>
      <DateFlex>
        <Searchbar />
      </DateFlex>

      <Divider border="2px" />
      <SimpleGrid my="5" columns={12} gap={1}>
        <GridItem colSpan={{ base: 12, md: 5, lg: 4, xl: 3 }}>
          <Calendar />
          <EventCard />
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 7, lg: 8, xl: 9 }}>
          <HourSchedule />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default CalendarDashboard;
