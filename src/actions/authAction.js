import {LOGIN_USER, SIGNUP, LOADING, LOGIN_ERROR} from '../types';
import axiosInstance from '../axios_setup';

//actions
const loginAction=(data)=>{
    return {
        type:LOGIN_USER,
        payload:data
    }
};

const loading=(data)=>{
    return {
        type:LOADING,
        payload:data
    }
};

const loginError=(data)=>{
    return {
        type:LOGIN_ERROR,
        payload:data
    }
};

const signupAction=(data)=>{
    return {
        type:SIGNUP,
        payload:data
    }
};

//action creators

const loginUser=(data)=>async (dispatch)=>{
    dispatch(loading(true));
    return await axiosInstance.post('user/login/',data)
        .then((response)=>{
            if(response.status===201){
                const {email, display_name, role, token } = response.data;
                const user={
                    email,
                    display_name,
                    role,
                    token
                };
                dispatch(loginAction(user));
            }
            dispatch(loading(false));
        }).catch((error)=>{
        dispatch(loginError('login failed, check your email or password'));
        dispatch(loading(false));
    })
};


const signupUser=(data)=>{

};

export {
    loginUser,
    signupUser
}
