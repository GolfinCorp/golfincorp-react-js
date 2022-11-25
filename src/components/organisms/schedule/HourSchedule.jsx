import React from 'react';
import { Grid } from '@chakra-ui/react';
import MatchCard from './MatchCard';
const HourSchedule = () => {
  const workingHours = 12;
  return (
    <Grid
      p="5"
      gap="5"
      maxH="80vh"
      overflowY="scroll"
      css={{
        '&::-webkit-scrollbar': {
          display: 'none'
        }
      }}
    >
      <MatchCard />
      <MatchCard />
      <MatchCard />
      <MatchCard />
      <MatchCard />
      <MatchCard />
      <MatchCard />
      <MatchCard />
      <MatchCard />
      <MatchCard />
      <MatchCard />
      <MatchCard />
      <MatchCard />
      <MatchCard />
    </Grid>
  );
};

export default HourSchedule;
