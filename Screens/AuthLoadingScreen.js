import React, { Component } from 'react'
import {View,ActivityIndicator,Text,AsyncStorage} from 'react-native'

class AuthLoadingScreen extends Component {
    constructor(){
        super();
        this.loadUser();
    }
    loadUser=async()=>{
        const bearerToken=await AsyncStorage.getItem('accsesToken');
        this.props.navigation.navigate(bearerToken?'App':'Auth')
    }
    render() {
        return (
            <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                <ActivityIndicator/>
            </View>
        )
    }
}

export default AuthLoadingScreen
