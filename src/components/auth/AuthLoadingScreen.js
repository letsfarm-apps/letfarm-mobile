import React, { Component } from 'react'
import {View,ActivityIndicator,Text,AsyncStorage} from 'react-native'
import {checkUser} from '../../utils/AuthUtil'

class AuthLoadingScreen extends Component {
    constructor(props){
        super(props);
        checkUser(props);
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
