import { useContext } from 'react';
import axiosInstance from '@/services/axios';
import { AuthContext } from '@/contexts';
import { setLocalStorage } from '@/helpers/localStorage';

const useAuth = () => {
  const { setAccessToken } = useContext(AuthContext);

  const login = async (credentials) => {
    const response = await axiosInstance.post('/users/login/', credentials);
    setAccessToken(response.data.token);
    setLocalStorage('accessToken', response.data.token);
    return response.data.token;
  };

  return { login, ...useContext(AuthContext) };
};

export default useAuth;
