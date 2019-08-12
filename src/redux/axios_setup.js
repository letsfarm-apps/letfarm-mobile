import axios from 'axios';
import AsyncStorage  from 'react-native'
import { API_URL } from 'react-native-dotenv'
token=async ()=>{
    try{
     const  ourToken = await AsyncStorage.getItem('accessToken');
     return ourToken;
    }catch{
        return '';
    }
}

const ourToken = token();

const axiosInstance = axios.create({
    baseURL: API_URL,
    // timeout: 1000,
    headers: {Authorization:ourToken ? `Bearer ${ourToken}`:''}
});

export default axiosInstance;
