import {POST_QUESTION,LOADING,POST_QUESTION_ERROR
    ,FETCH_QUESTIONS,FETCH_QUESTIONS_ERROR,
    FETCH_QUESTION_DETAILS,FETCH_QUESTION_DETAILS_ERROR,
    FETCH_QUESTION_REPLIES,FETCH_QUESTION_REPLIES_ERROR,
    POST_QUESTION_REPLY,POST_QUESTION_REPLY_ERROR,
    LOADING_REPLIES
} from '../types';
import axiosInstance from '../axios_setup';
import axios from 'axios';
import { API_URL } from 'react-native-dotenv';
import {AsyncStorage} from "react-native";

const action=(type,payload)=>{
    return {
        type,
        payload
    }
};

const postNewQuestion=(data)=> async (dispatch)=> {
    dispatch(action(LOADING, true));
    const token = await AsyncStorage.getItem('accessToken');
    return await axios.post(`${API_URL}/questions`, data,
        {headers: {Authorization:`Bearer ${token}`}}
        )
        .then(response => {
                const {body,title} = response.data;
                const question = {
                    body,
                    title
                };
                dispatch(action(POST_QUESTION, question));
            dispatch(action(LOADING, false))
        }).catch((error) => {
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

const fetchQuestionDetails=(id)=> async (dispatch)=> {
    dispatch(action(LOADING, true));
    return await axiosInstance.get('/questions/'+id)
        .then(response => {
                dispatch(action(FETCH_QUESTION_DETAILS, response.data.question));
                dispatch(action(LOADING, false))
        }).catch((error) => {
            console.log(error)
            dispatch(action(FETCH_QUESTION_DETAILS_ERROR, 'failed to fetch question'));
            dispatch(action(LOADING, false));
        });
};
const fetchQuestionReplies=(id)=> async (dispatch)=> {
    dispatch(action(LOADING_REPLIES, true));
    return await axiosInstance.get('/answers/'+id)
        .then(response => {
            
                dispatch(action(FETCH_QUESTION_REPLIES, response.data.answers));
                dispatch(action(LOADING_REPLIES, false))
        }).catch((error) => {
            console.log(error)
            dispatch(action(FETCH_QUESTION_REPLIES_ERROR, 'failed to fetch replies'));
            dispatch(action(LOADING_REPLIES, false));
        });
};

const postQuestionReply=(payload)=> async (dispatch)=> {
    dispatch(action(LOADING, true));
    const token = await AsyncStorage.getItem('accessToken');
    return await axios.post(`${API_URL}/answers/${payload.id}`,
        {
            body:payload.body
        },
        {headers: {Authorization:`Bearer ${token}`}}
        )
        .then(response => {
                dispatch(action(POST_QUESTION_REPLY, response.data.answer));
            dispatch(action(LOADING, false))
        }).catch((error) => {
            console.log('error: ',error)
            dispatch(action(POST_QUESTION_REPLY_ERROR, 'failed to post question reply, check your network connection'));
            dispatch(action(LOADING, false));
        });
};

export {
    postNewQuestion,
    fetchQuestions,
    fetchQuestionDetails,
    fetchQuestionReplies,
    postQuestionReply
};
