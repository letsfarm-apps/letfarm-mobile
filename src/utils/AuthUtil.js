import {AsyncStorage } from 'react-native'

const checkUser=async(props)=>{
    const bearerToken=await AsyncStorage.getItem('accessToken');
    props.navigation.navigate(bearerToken?'App':'Auth')
    console.log('Checking user')
}

const logout=async (props)=>{
    await AsyncStorage.removeItem('accessToken')
    checkUser(props);
    console.log('logging out')
}

export {
    checkUser,
    logout
}