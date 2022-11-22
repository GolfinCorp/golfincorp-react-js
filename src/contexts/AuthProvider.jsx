import jwt from 'jwt-decode';
import { createContext, useState, useEffect } from 'react';
import { getLocalStorage } from '@/helpers/localStorage';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authToken, setAuthToken] = useState(null);

  const data = {
    user,
    setUser,
    authToken,
    setAuthToken
  };

  useEffect(() => {
    const token = getLocalStorage('accessToken');

    if (!token) return;
    const user = jwt(token);
    setUser(user);
    setAuthToken(token);
  }, []);

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
