import { createSwitchNavigator, createAppContainer} from 'react-navigation';
import AuthLoadingScreen from './components/auth/AuthLoadingScreen';
import WelcomeScreen from './components/auth/AuthScreen'
import Questions from './components/questions/FarmerQuestions'
import Homescreen from './components/general/HomeScreen'
import Diseases from './components/diseases/Diseases'
import Practices from './components/practices/Practices'
import PracticeDetails from './components/practices/PracticeDetails'
import DiseaseDetails from './components/diseases/DiseaseDetails'
import QuestionReplies from './components/questions/QuestionReplies'
import PostQuestion from './components/questions/PostQuestion'
// import HomeScreen from './components/HomeScreen';

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
