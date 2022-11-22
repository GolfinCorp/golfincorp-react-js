import axios from 'axios';

const BASE_URL = 'https://golfincorp-backend.onrender.com/api';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' }
});

export default axiosInstance;
