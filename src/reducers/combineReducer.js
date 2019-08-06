import { combineReducers  } from 'redux';
import authReducer from "./authReducer";
import  postQtnReducer from './question'

export default combineReducers({
    auth: authReducer,
    postQuestion:postQtnReducer
});

