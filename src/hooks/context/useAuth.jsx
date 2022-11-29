import { useContext } from 'react';
import jwt from 'jwt-decode';
import axiosInstance from '@/services/axios';
import { AuthContext } from '@/contexts';
import { setLocalStorage, deleteLocalStorage } from '@/helpers/localStorage';
import { useToastNotification } from '@/hooks';
const useAuth = () => {
  const { setAuthToken, setUser } = useContext(AuthContext);
  const { handleAsyncToast } = useToastNotification();
  const login = async (credentials) => {
    const response = await handleAsyncToast(
      axiosInstance.post('/users/login/', credentials),
      { title: 'Bienvenido', description: `${credentials.email}` },
      'Iniciando sesión'
    );
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
