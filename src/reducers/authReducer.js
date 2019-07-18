import {LOADING, LOGIN_ERROR, LOGIN_USER,SIGNUP_ERROR,SIGNUP_USER} from "../types";

let initialState = {
    user: {},
    loginError:"",
    signupError:"",
    isLoading: false,
    isLogged:false
};

const authReducer=(state=initialState,action)=>{
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload,
                isLogged:true
            };
        case SIGNUP_USER:
            return {
                ...state,
                user: action.payload,
                isLogged:true
            };

        case LOGIN_ERROR:
            return {
                ...state,
                loginError: action.payload
            };
        case SIGNUP_ERROR:
                return {
                    ...state,
                    signupError: action.payload
                };
        default:
            return state;
    }
};

export default authReducer;
