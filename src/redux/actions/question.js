import {POST_QUESTION,LOADING,POST_QUESTION_ERROR,FETCH_QUESTIONS,FETCH_QUESTIONS_ERROR} from '../types';
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
            if (response.status === 201) {
                const {body,title} = response.data;
                const question = {
                    body,
                    title
                };
                dispatch(action(POST_QUESTION, question));
            }
            dispatch(action(LOADING, false))
        }).catch((error) => {
            dispatch(action(POST_QUESTION_ERROR, 'failed to post question, check your network connection'));
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
