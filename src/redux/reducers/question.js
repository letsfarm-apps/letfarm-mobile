import {LOADING, POST_QUESTION,POST_QUESTION_ERROR,FETCH_QUESTIONS,FETCH_QUESTIONS_ERROR} from "../types";

let initialState = {
    question: {},
    questions:[],
    fetchQtnError:"",
    postError:"",
    isPosted: false,
    isQtnsFetched:false,
    isLoading: false,
};


const questions=(state=initialState,action)=>{
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case POST_QUESTION:
            return {
                ...state,
                question: action.payload,
                isPosted:true
            };
        
        case POST_QUESTION_ERROR:
            return {
                ...state,
                postError: action.payload
            };
        case FETCH_QUESTIONS:
            return {
                ...state,
                questions:action.payload,
                isQtnsFetched:true
            };
        case FETCH_QUESTIONS_ERROR:
            return {
                ...state,
                fetchQtnError:action.payload
            }
        default:
            return state;
    }
};


export default questions;