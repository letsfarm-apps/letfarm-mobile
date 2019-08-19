import {FETCH_PRACTICES,FETCH_PRACTICES_ERROR,LOADING} from '../types';
import axiosInstance from '../axios_setup';

const action=(type,payload)=>{
    return {
        type,
        payload
    }
};

const fetchPractices=()=> async (dispatch)=> {
    dispatch(action(LOADING, true));
    return await axiosInstance.get('/practices')
        .then(response => {
                dispatch(action(FETCH_PRACTICES, response.data.practices));
                dispatch(action(LOADING, false))
        }).catch((error) => {
            console.log(error)
            dispatch(action(FETCH_PRACTICES_ERROR, 'failed to fetch practices'));
            dispatch(action(LOADING, false));
        });
};


export {
    fetchPractices
};
