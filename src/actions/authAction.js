import {LOGIN_USER, LOADING, LOGIN_ERROR, SIGNUP_USER, SIGNUP_ERROR} from '../types';
import axiosInstance from '../axios_setup';

const action=(type,payload)=>{
    return {
        type,
        payload
    }
};

const loginUser=(data)=>async (dispatch)=>{
    dispatch(action(LOADING,true));
    return await axiosInstance.post('user/login/',data)
        .then((response)=>{
            if(response.status===200){
                const {email, display_name, role, token } = response.data;
                const user={
                    email,
                    display_name,
                    role,
                    token
                };
                dispatch(action(LOGIN_USER,user));
            }
            dispatch(action(LOADING,false));
        }).catch((error)=>{
        dispatch(action(LOGIN_ERROR,'login failed, check your email or password'));
        dispatch(action(LOADING,false));
    })
};


const signupUser=(data)=> async (dispatch)=> {
    dispatch(action(LOADING, true));
    return await axiosInstance.post('/user', data)
        .then(response => {
            console.log(response.status)
            if (response.status === 201) {
                const {email, display_name, role, token} = response.data;
                const user = {
                    email,
                    display_name,
                    role,
                    token
                };
                dispatch(action(SIGNUP_USER, user));
            }
            dispatch(action(LOADING, false))
        }).catch((error) => {
            dispatch(action(SIGNUP_ERROR, 'signup failed, check your email or password'));
            dispatch(action(LOADING, false));
        });
};

export {
    loginUser,
    signupUser
};

