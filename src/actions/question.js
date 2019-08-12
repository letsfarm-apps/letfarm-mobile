import {POST_QUESTION,LOADING,POST_QUESTION_ERROR} from '../types';
import axiosInstance from '../axios_setup';

const action=(type,payload)=>{
    return {
        type,
        payload
    }
};


const postNewQuestion=(data)=> async (dispatch)=> {
    dispatch(action(LOADING, true));
    return await axiosInstance.post('/questions', data)
        .then(response => {
            console.log(response.data)
            if (response.status === 200) {
                const {body,title} = response.data;
                const question = {
                    body,
                    title
                };
                dispatch(action(POST_QUESTION, question));
            }
            dispatch(action(LOADING, false))
        }).catch((error) => {
            console.log(error)
            dispatch(action(POST_QUESTION_ERROR, 'failed to post question, check your network connection'));
            dispatch(action(LOADING, false));
        });
};


export {
    postNewQuestion
};
