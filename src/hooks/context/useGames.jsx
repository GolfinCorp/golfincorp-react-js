import { useContext } from 'react';
import { GamesContext } from '@/contexts';
import { useAxiosPrivate, useToastNotification } from '@/hooks';
const useGames = () => {
  const { setGames, games, setCurrentGames } = useContext(GamesContext);
  const { handleAsyncToast, handleErrorToast } = useToastNotification();
  const { get } = useAxiosPrivate();
  const getGames = async () => {
    try {
      const gamesRes = await handleAsyncToast(
        get('games'),
        {
          title: 'Exito',
          description: 'Juegos cargados'
        },
        'Cargando Juegos'
      );
      if (!gamesRes) return;

      setGames(gamesRes.data);
      return true;
    } catch (error) {
      handleErrorToast(error);
      return false;
    }
  };
  const getGamesByDate = (date) => {
    const reducedGames = games.map((game) => {
      const newDate = new Date(game.date);
      return { ...game, date: newDate };
    });
    const filtered = reducedGames.filter((game) => game.date === date);
    setCurrentGames(filtered || null);
  };
  return { getGames, getGamesByDate, ...useContext(GamesContext) };
};

export default useGames;
