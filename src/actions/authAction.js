import {LOGIN_USER, SIGNUP, LOADING, LOGIN_ERROR, SIGNUP_USER} from '../types';
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
        type:SIGNUP_USER,
        payload:data
    }
};
const signupError=(data)=>{
    return {
        type:SIGNUP_ERROR,
        payload:data
    }
}

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


const signupUser=(data)=> async (dispatch)=>{
    dispatch(loading(true));
    return await axiosInstance.post('/user',data)
        .then(response=>{
            if(response.status===201){
                const {email, display_name, role, token } = response.data;
                const user={
                    email,
                    display_name,
                    role,
                    token
                };
                dispatch(signupAction(user));
            }
            dispatch(loading(false))
        }).catch((error)=>{
            dispatch(signupError('login failed, check your email or password'));
            dispatch(loading(false));
        })


};

export {
    loginUser,
    signupUser
}
