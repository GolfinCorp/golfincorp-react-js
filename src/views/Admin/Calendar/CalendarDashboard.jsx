import DateFlex from '@/components/molecules/Date';
import { Searchbar, EventCard } from '@/components/atoms';
import { HourSchedule } from '@/components/organisms';
import { Divider, SimpleGrid, GridItem } from '@chakra-ui/react';
import { Calendar } from '@/components/molecules';
import { useGames, useCalendar } from '@/hooks';
import { useEffect } from 'react';
const CalendarDashboard = () => {
  const { getGames, games, getGamesByDate } = useGames();
  const { selectedDate } = useCalendar();
  const fetchGames = async () => {
    await getGames();
  };
  useEffect(() => {
    if (!games) {
      fetchGames();
    } else {
      getGamesByDate(selectedDate);
    }
  }, [games]);
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
