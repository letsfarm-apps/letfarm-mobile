import { combineReducers  } from 'redux';
import authReducer from "./authReducer";
import  questions from './question'
import practices from './practice'

export default combineReducers({
    auth: authReducer,
    questions:questions,
    practices:practices
});

