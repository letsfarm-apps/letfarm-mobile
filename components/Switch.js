
import { createSwitchNavigator, createAppContainer} from 'react-navigation';
import AuthLoadingScreen from '../Screens/AuthLoadingScreen';
import WelcomeScreen from '../Screens/WelcomeScreen'
import SignUpScreen from '../Screens/SignUpScreen'
import SignInScreen from '../Screens/SignInScreen'
import LaunchScreen from '../Screens/LaunchScreen'
import Questions from '../Screens/FarmerQuestions'
import Diseases from '../Screens/Diseases'
import Practices from '../Screens/Practices'
import PracticeDetails from '../Screens/PracticeDetails'
import DiseaseDetails from '../Screens/DiseaseDetails'

const AuthSwitchNavigator=createSwitchNavigator({
    Welcome:WelcomeScreen,
    SignIn:SignInScreen,
    SignUp:SignUpScreen,
    Questions:Questions,
    Diseases:Diseases,
    Practices:Practices,
    PracticeDetails:PracticeDetails,
    DiseaseDetails:DiseaseDetails
    
    
    
    
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