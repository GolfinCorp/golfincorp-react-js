import { createContext, useState } from 'react';

export const GamesContext = createContext({});

const GamesProvider = ({ children }) => {
  // All games of the club
  const [games, setGames] = useState(null);

  // Games matching the selectedDate
  const [history, setHistory] = useState([]);

  //
  const data = { games, setGames, history, setHistory };

  return <GamesContext.Provider value={data}>{children}</GamesContext.Provider>;
};

export default GamesProvider;
