import {LOADING, LOGIN_ERROR, LOGIN_USER} from "../types";

let initialState = {
    user: {},
    loginError:"",
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
        case LOGIN_ERROR:
            return {
                ...state,
                loginError: action.payload
            };
        default:
            return state;
    }
};

export default authReducer;
