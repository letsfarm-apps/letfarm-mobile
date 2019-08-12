import {AsyncStorage } from 'react-native'

const checkUser=async (props)=>{
    const bearerToken=await AsyncStorage.getItem('accessToken');
    props.navigation.navigate(bearerToken?'App':'Auth');
};

const logout=async (props)=>{
    await AsyncStorage.removeItem('accessToken');
    checkUser(props);
};

export {
    checkUser,
    logout
}
