import {FETCH_PRACTICES,FETCH_PRACTICES_ERROR,LOADING,FETCH_PRACTICE_DETAILS,FETCH_PRACTICE_DETAILS_ERROR} from '../types';
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

const fetchPracticeDetails=(id)=> async (dispatch)=> {
    dispatch(action(LOADING, true));
    return await axiosInstance.get('/practice/'+id)
        .then(response => {
                dispatch(action(FETCH_PRACTICE_DETAILS, response.data.practice));
                dispatch(action(LOADING, false))
        }).catch((error) => {
            console.log(error)
            dispatch(action(FETCH_DISEASE_DETAILS_ERROR, 'failed to fetch practice'));
            dispatch(action(LOADING, false));
        });
};


export {
    fetchPractices,
    fetchPracticeDetails
};
