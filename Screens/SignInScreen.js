import React, { Component } from 'react'
import {View,Button,Text,AsyncStorage} from 'react-native'

class SignInScreen extends Component {
    signIn=async()=>{
        await AsyncStorage.setItem('accessToken','wamozo cosmas')
        this.props.navigation.navigate('App')
    }

   
    render() {
        return (
            <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                <Button title="Sign In" onPress={this.signIn}/>
            </View>
        )
    }
}

export default SignInScreen