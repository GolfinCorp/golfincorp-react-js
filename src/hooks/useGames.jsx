import { useContext } from 'react';
import { GamesContext } from '@/contexts';
import useAxiosPrivate from './useAxiosPrivate';
const useGames = () => {
  const { setGames } = useContext(GamesContext);
  const { get } = useAxiosPrivate();

  return { ...useContext(GamesContext) };
};

export default useGames;
