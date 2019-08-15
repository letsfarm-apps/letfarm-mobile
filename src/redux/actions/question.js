import {POST_QUESTION,LOADING,POST_QUESTION_ERROR,FETCH_QUESTIONS,FETCH_QUESTIONS_ERROR} from '../types';
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
                const {body,title} = response.data;
                const question = {
                    body,
                    title
                };
                dispatch(action(POST_QUESTION, question));
                dispatch(action(LOADING, false))
        }).catch((error) => {
            console.log("error:",error)
            dispatch(action(POST_QUESTION_ERROR, 'failed to post question, check your network connection'));
            dispatch(action(LOADING, false));
        });
};
const fetchQuestions=()=> async (dispatch)=> {
    dispatch(action(LOADING, true));
    return await axiosInstance.get('/questions')
        .then(response => {
                dispatch(action(FETCH_QUESTIONS, response.data.questions));
                dispatch(action(LOADING, false))
        }).catch((error) => {
            console.log(error)
            dispatch(action(FETCH_QUESTIONS_ERROR, 'failed to fetch questions'));
            dispatch(action(LOADING, false));
        });
};


export {
    postNewQuestion,
    fetchQuestions
};
