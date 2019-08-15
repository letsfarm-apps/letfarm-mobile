import axios from 'axios';
import { API_URL } from 'react-native-dotenv';

let settings = {
    baseURL: API_URL,
};

export default axios.create(settings);
