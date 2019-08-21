import { combineReducers  } from 'redux';
import authReducer from "./authReducer";
import  questions from './question'
import practices from './practice'
import diseases from './disease'

export default combineReducers({
    auth: authReducer,
    questions:questions,
    practices:practices,
    diseases:diseases
});

