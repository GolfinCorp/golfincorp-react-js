import { useContext } from 'react';
import { GamesContext } from '@/contexts';
import { useAxiosPrivate, useToastNotification, useCalendar } from '@/hooks';

const gamesUrl = (endpoint) => {
  return endpoint ? `games/${endpoint}` : 'games';
};
const useGames = () => {
  const { setGames, games } = useContext(GamesContext);
  const { selectedDate } = useCalendar();
  const { handleAsyncToast, handleErrorToast } = useToastNotification();
  const { get } = useAxiosPrivate();

  const getGamesByDate = async (date = selectedDate) => {
    if (games) {
      // Check if games exist and if games of 'selected' date has already been fetched
      const fetchedDate = games.find(
        (gameDay) => gameDay.id === date.getTime()
      );
      if (fetchedDate) return;
    }
    try {
      const gamesRes = await handleAsyncToast(
        get(gamesUrl('filter'), {
          params: {
            startDate: date,
            endDate: new Date(date - 1)
          }
        }),
        {
          title: 'Exito',
          description: 'Juegos cargados'
        },
        'Cargando Juegos'
      );

      if (!gamesRes) return;
      // Generate game object
      const newGameDate = {
        id: date.getTime(), // Will be used to find and filter gameDates
        games: gamesRes.data
      };
      setGames(games ? [...games, newGameDate] : [newGameDate]);
      return true;
    } catch (error) {
      handleErrorToast(error);
      return false;
    }
  };

  return { getGamesByDate, ...useContext(GamesContext) };
};

export default useGames;
