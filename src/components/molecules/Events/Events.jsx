import React, { useState, useEffect } from 'react';
import { Text, Divider } from '@chakra-ui/react';
import { EventCard, EventSkeleton } from '@/components/atoms';
import { useGames } from '@/hooks';
const Events = () => {
  const { games } = useGames();
  const [todayGames, setTodayGames] = useState(null);
  const today = new Date(new Date().setHours(0, 0, 0, 0));
  useEffect(() => {
    if (todayGames || !games) return;
    const filteredGames = games.find(
      (gameDay) => gameDay.id === today.getTime()
    );
    setTodayGames(filteredGames.games);
  }, [games]);

  return (
    <>
      <Text>Proximos eventos</Text>
      <Divider my="5" />
      {games && todayGames ? (
        todayGames.length > 0 ? (
          todayGames.map((game) => {
            return <EventCard game={game} key={game._id} />;
          })
        ) : (
          <Text>No hay juegos hoy</Text>
        )
      ) : (
        <EventSkeleton />
      )}
    </>
  );
};

export default Events;
