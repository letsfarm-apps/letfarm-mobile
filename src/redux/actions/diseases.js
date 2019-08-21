import {FETCH_DISEASES,FETCH_DISEASES_ERROR,LOADING} from '../types';
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


export {
    fetchDiseases
};
