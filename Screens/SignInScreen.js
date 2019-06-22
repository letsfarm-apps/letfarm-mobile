import React, { Component } from 'react'
import { connect } from 'react-redux';
import {loginUser} from "../src/actions/authAction";
import {View,Button,Text,AsyncStorage} from 'react-native'

class SignInScreen extends Component {
    signIn=async()=>{
        //await AsyncStorage.setItem('accessToken','wamozo cosmas')
        const data={
            email:"test2@mail.com",
            password:"1234g"
        };
        console.log(data);
        await this.props.loginUser(data);
        // if (this.props.isLogged){
        //     console.log('user logged in');
        //     this.props.navigation.navigate('App')
        // }
    };

    render() {
        return (
            <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                <Button title="Sign In" onPress={this.signIn}/>
            </View>
        )
    }
}


const mapStateToProps = (state) =>{
    return {
        user: state.auth.user,
        fetchStatus: state.auth.isLoading,
        loginError: state.auth.loginError,
        isLogged: state.auth.isLogged,
    }
};

export default connect(mapStateToProps,{loginUser})(SignInScreen);
