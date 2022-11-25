import { useContext } from 'react';
import jwt from 'jwt-decode';
import axiosInstance from '@/services/axios';
import { AuthContext } from '@/contexts';
import { setLocalStorage } from '@/helpers/localStorage';

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

  return { login, ...useContext(AuthContext) };
};

export default useAuth;
