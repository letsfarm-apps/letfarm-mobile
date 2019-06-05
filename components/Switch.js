
import { createSwitchNavigator, createAppContainer,withNavigation} from 'react-navigation';
import React from 'react';
import AuthLoadingScreen from '../Screens/AuthLoadingScreen';
import WelcomeScreen from '../Screens/WelcomeScreen'
import LaunchScreen from '../Screens/LaunchScreen'
import HomeScreen from '../Screens/HomeScreen'
import Questions from '../Screens/Questions'
import Diseases from '../Screens/Diseases'
import Practices from '../Screens/Practices'
import Answers from '../Screens/Answers'

const AuthSwitchNavigator=createSwitchNavigator({
    Welcome:WelcomeScreen,
    Questions:Questions,
    Diseases:Diseases,
    Practices:Practices,
    Answers:Answers
    
    
    
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

export default  Switch