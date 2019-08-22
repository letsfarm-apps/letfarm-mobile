import {FETCH_CATEGORIES,FETCH_CATEGORIES_ERROR,LOADING} from '../types';
import axiosInstance from '../axios_setup';

const action=(type,payload)=>{
    return {
        type,
        payload
    }
};

const fetchCategories=()=> async (dispatch)=> {
    dispatch(action(LOADING, true));
    return await axiosInstance.get('/categories')
        .then(response => {
                dispatch(action(FETCH_CATEGORIES, response.data.categories));
                dispatch(action(LOADING, false))
        }).catch((error) => {
            console.log(error)
            dispatch(action(FETCH_CATEGORIES_ERROR, 'failed to fetch categories'));
            dispatch(action(LOADING, false));
        });
};


export {
    fetchCategories
};
