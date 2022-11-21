import { createContext, useState, useEffect } from 'react';
import { getLocalStorage } from '@/helpers/localStorage';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);

  const data = {
    accessToken,
    setAccessToken
  };

  useEffect(() => {
    const accessToken = getLocalStorage('accessToken');

    if (!accessToken) return;
    setAccessToken(accessToken);
  }, []);

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
