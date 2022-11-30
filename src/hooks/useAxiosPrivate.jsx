import { useEffect, useCallback } from 'react';
import axiosInstance from '@/services/axios';
import { useAuth } from '@/hooks';

const useAxiosPrivate = () => {
  const { authToken } = useAuth();

  useEffect(() => {
    const requestIntercept = axiosInstance.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `${authToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestIntercept);
    };
  }, [authToken]);

  const get = useCallback(async (...args) => {
    const response = await axiosInstance.get(...args);
    return response;
  }, []);

  const post = useCallback(async (...args) => {
    const response = await axiosInstance.post(...args);
    return response;
  }, []);

  const patch = useCallback(async (...args) => {
    const response = await axiosInstance.patch(...args);
    return response;
  }, []);

  const axiosDelete = useCallback(async (...args) => {
    const response = await axiosInstance.delete(...args);
    return response;
  }, []);

  return { axiosPrivate: axiosInstance, get, post, patch, axiosDelete };
};

export default useAxiosPrivate;
