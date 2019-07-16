import axios from 'axios';
import { API_URL } from 'react-native-dotenv'

const token = '';//change to get from asyncStorage using key accessToken
const axiosInstance = axios.create({
    baseURL: API_URL,
    // timeout: 1000,
    headers: {Authorization:token ? `Bearer ${token}`:''}
});

export default axiosInstance;
