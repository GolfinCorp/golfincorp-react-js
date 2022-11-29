import { createContext, useState } from 'react';

export const GamesContext = createContext({});

const GamesProvider = ({ children }) => {
  const [games, setGames] = useState(null);

  const data = { games, setGames };

  return <GamesContext.Provider value={data}>{children}</GamesContext.Provider>;
};

export default GamesProvider;
