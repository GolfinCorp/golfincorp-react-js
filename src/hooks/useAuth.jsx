import { useContext } from 'react';
import jwt from 'jwt-decode';
import axiosInstance from '@/services/axios';
import { AuthContext } from '@/contexts';
import { setLocalStorage, deleteLocalStorage } from '@/helpers/localStorage';

const useAuth = () => {
  const { setAuthToken, setUser } = useContext(AuthContext);

  const login = async (credentials) => {
    const response = await axiosInstance.post('/users/login/', credentials);
    const token = response.data.token;
    const user = jwt(token);

    setAuthToken(token);
    setUser(user);
    setLocalStorage('accessToken', token);
    return user;
  };

  const logout = async () => {
    setAuthToken(null);
    setUser(null);
    deleteLocalStorage('accessToken');
    return true;
  };

  return { login, logout, ...useContext(AuthContext) };
};

export default useAuth;
