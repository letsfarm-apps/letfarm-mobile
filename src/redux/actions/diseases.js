import {FETCH_DISEASES,FETCH_DISEASES_ERROR,LOADING,FETCH_DISEASE_DETAILS,FETCH_DISEASE_DETAILS_ERROR} from '../types';
import axiosInstance from '../axios_setup';

const action=(type,payload)=>{
    return {
        type,
        payload
    }
};

const fetchDiseases=(id)=> async (dispatch)=> {
    dispatch(action(LOADING, true));
    return await axiosInstance.get('/category/'+id+'/diseases')
        .then(response => {
                dispatch(action(FETCH_DISEASES, response.data.category.diseases));
                dispatch(action(LOADING, false))
        }).catch((error) => {
            console.log(error)
            dispatch(action(FETCH_DISEASES_ERROR, 'failed to fetch diseases'));
            dispatch(action(LOADING, false));
        });
};

const fetchDiseaseDetails=(id)=> async (dispatch)=> {
    dispatch(action(LOADING, true));
    return await axiosInstance.get('/disease/'+id)
        .then(response => {
                dispatch(action(FETCH_DISEASE_DETAILS, response.data.disease));
                dispatch(action(LOADING, false))
        }).catch((error) => {
            console.log(error)
            dispatch(action(FETCH_DISEASE_DETAILS_ERROR, 'failed to fetch disease'));
            dispatch(action(LOADING, false));
        });
};


export {
    fetchDiseases,
    fetchDiseaseDetails
};
