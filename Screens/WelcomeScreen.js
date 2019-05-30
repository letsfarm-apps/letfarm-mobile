import React, { Component } from 'react'
import {View,ActivityIndicator,Text,AsyncStorage,Button} from 'react-native'

class WelcomeScreen extends Component {
   
    render() {
        return (
            <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                <Button title="Sign In" onPress={()=>this.props.navigation.navigate('SignIn')}/>
                
                <Button  title="Sign Up" onPress={()=>this.props.navigation.navigate('SignUp')}/>
            </View>
        )
    }
}

export default WelcomeScreen