import { createContext, useState, useEffect } from 'react';
import { getLocalStorage } from '@/helpers/localStorage';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);

  const data = {
    authToken,
    setAuthToken
  };

  useEffect(() => {
    const token = getLocalStorage('accessToken');

    if (!token) return;
    setAuthToken(token);
  }, []);

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
