import { createSwitchNavigator, createAppContainer} from 'react-navigation';
import AuthLoadingScreen from '../Screens/AuthLoadingScreen';
import WelcomeScreen from '../Screens/WelcomeScreen'
import Questions from '../Screens/FarmerQuestions'
import Homescreen from '../Screens/HomeScreen'
import Diseases from '../Screens/Diseases'
import Practices from '../Screens/Practices'
import PracticeDetails from '../Screens/PracticeDetails'
import DiseaseDetails from '../Screens/DiseaseDetails'
import QuestionReplies from '../Screens/QuestionReplies'
import PostQuestion from '../Screens/PostQuestion'
import HomeScreen from '../Screens/HomeScreen';


const NavStack = createSwitchNavigator({
    AuthLoadingScreen: AuthLoadingScreen,
    Auth:WelcomeScreen,
    App:Homescreen,
    Questions:Questions,
    Diseases:Diseases,
    Practices:Practices,
    PracticeDetails:PracticeDetails,
    DiseaseDetails:DiseaseDetails,
    QuestionReplies:QuestionReplies,
    PostQuestion:PostQuestion
    
});

const Switch = createAppContainer(NavStack);

export default Switch;
