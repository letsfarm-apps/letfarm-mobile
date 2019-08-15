import {AsyncStorage } from 'react-native'

const checkUser=async (props)=>{
    const bearerToken=await AsyncStorage.getItem('accessToken');
    props.navigation.navigate(bearerToken?'App':'Auth');
};

const  getToken = async () =>{
    try {
        const value = await AsyncStorage.getItem('accessToken');
        if (value !== null) {
            return value;
        }
    } catch (error) {
        console.log('AsyncStorage Error: ' + error.message);
    }
    return ''
};

const logout=async (props)=>{
    await AsyncStorage.removeItem('accessToken');
    checkUser(props);
};

export {
    checkUser,
    logout,
    getToken
}
