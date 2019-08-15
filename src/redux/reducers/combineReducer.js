import { combineReducers  } from 'redux';
import authReducer from "./authReducer";
import  questions from './question'

export default combineReducers({
    auth: authReducer,
    questions:questions
});

