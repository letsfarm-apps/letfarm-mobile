import { combineReducers  } from 'redux';
import authReducer from "./authReducer";
import  questions from './question'
import practices from './practice'
import diseases from './disease'
import categories from './category'
export default combineReducers({
    auth: authReducer,
    questions:questions,
    practices:practices,
    diseases:diseases,
    categories:categories
});

