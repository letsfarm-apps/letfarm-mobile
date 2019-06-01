
import { createSwitchNavigator, createAppContainer,createNavigationContainer} from 'react-navigation';
import React from 'react';
import AuthLoadingScreen from '../Screens/AuthLoadingScreen';
import WelcomeScreen from '../Screens/WelcomeScreen'
import SignUpScreen from '../Screens/SignUpScreen'
import SignInScreen from '../Screens/SignInScreen'
import LaunchScreen from '../Screens/LaunchScreen'
import HomeScreen from '../Screens/HomeScreen'

const AuthSwitchNavigator=createSwitchNavigator({
    Welcome:WelcomeScreen,
    SignIn:SignInScreen,
    SignUp:SignUpScreen,
    
    
    
    
})


const NavStack = createSwitchNavigator({
    AuthLoadingScreen: { 
        screen: AuthLoadingScreen,
    },
    Auth:AuthSwitchNavigator,
    App:{
        screen:LaunchScreen
    }
    

});

const Switch = createAppContainer(NavStack);

export default Switch;