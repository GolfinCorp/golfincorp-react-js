import { useEffect } from 'react';
import { Divider, SimpleGrid, GridItem } from '@chakra-ui/react';
import { useGames } from '@/hooks';
import { Searchbar } from '@/components/atoms';
import { HourSchedule } from '@/components/organisms';
import { Calendar, DateFlex, Events } from '@/components/molecules';

const CalendarDashboard = () => {
  const { games, getGamesByDate } = useGames();
  const fetchGames = async () => {
    await getGamesByDate();
  };
  useEffect(() => {
    // Initial state load
    if (!games) {
      fetchGames();
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
          <Events />
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 7, lg: 8, xl: 9 }}>
          <HourSchedule />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default CalendarDashboard;
