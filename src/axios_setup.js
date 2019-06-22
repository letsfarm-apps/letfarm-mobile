import axios from 'axios';
import { API_URL } from 'react-native-dotenv'

const user = '';
const axiosInstance = axios.create({
    baseURL: API_URL,
    // timeout: 1000,
    headers: {Authorization:user ? `Bearer ${user.token}`:''}
});

export default axiosInstance;
