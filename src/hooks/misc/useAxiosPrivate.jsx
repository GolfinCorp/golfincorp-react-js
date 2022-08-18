import { useEffect, useCallback } from 'react';
import { axiosPrivate } from 'pages/api/axios';
import useAuth from 'hooks/useAuth';

const useAxiosPrivate = () => {
  const { accessToken } = useAuth();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headersAuthorization) {
          config.headersAuthorization = `${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
    };
  }, [accessToken]);

  const get = useCallback(async (...args) => {
    const response = await axiosPrivate.get(...args);
    return response;
  }, []);

  const post = useCallback(async (...args) => {
    const response = await axiosPrivate.post(...args);
    return response;
  }, []);

  const patch = useCallback(async (...args) => {
    const response = await axiosPrivate.patch(...args);
    return response;
  }, []);

  return { axiosPrivate, get, post, patch };
};

export default useAxiosPrivate;
