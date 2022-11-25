import DateFlex from '@/components/molecules/Date';
import { Searchbar } from '@/components/atoms';
import { HourSchedule } from '@/components/organisms';
import { Divider, SimpleGrid, GridItem, Box } from '@chakra-ui/react';

const Calendar = () => {
  return (
    <>
      <DateFlex>
        <Searchbar />
      </DateFlex>

      <Divider border="2px" />
      <SimpleGrid my="5" columns={12} gap={1}>
        <GridItem colSpan={{ base: 12, md: 4 }}>
          <Box p="5"></Box>
        </GridItem>
        <GridItem colSpan={{ base: 12, md: 8 }}>
          <HourSchedule />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default Calendar;
