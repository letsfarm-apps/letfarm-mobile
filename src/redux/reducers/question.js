import {LOADING, POST_QUESTION,POST_QUESTION_ERROR,
    FETCH_QUESTIONS,FETCH_QUESTIONS_ERROR, 
    FETCH_QUESTION_DETAILS,FETCH_QUESTION_DETAILS_ERROR, 
    FETCH_QUESTION_REPLIES,FETCH_QUESTION_REPLIES_ERROR,
    POST_QUESTION_REPLY,POST_QUESTION_REPLY_ERROR,
    LOADING_REPLIES
} from "../types";

let initialState = {
    question: {},
    singleQuestion:{},
    questions:[],
    reply:{},
    fetchQtnError:"",
    postError:"",
    isPosted: false,
    isReplyPosted: false,
    postReplyError:"",
    isQtnsFetched:false,
    isLoading: false,
    isRepliesLoading:false,
    fetchQtnDetailsError:"",
    isQtnDetailsFetched:false,
    fetchQtnRepliesError:"",
    isQtnRepliesFetched:false,

};


const questions=(state=initialState,action)=>{
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case LOADING_REPLIES:
            return {
                ...state,
                isRepliesLoading: action.payload
            };
        case POST_QUESTION:
            return {
                ...state,
                question: action.payload,
                isPosted:true
            };
        case POST_QUESTION_REPLY:
            return {
                ...state,
                reply: action.payload,
                isReplyPosted:true
            };
        case POST_QUESTION_ERROR:
            return {
                ...state,
                postError: action.payload
            };
        case POST_QUESTION_REPLY_ERROR:
            return {
                ...state,
                postReplyError: action.payload
            };
        case FETCH_QUESTIONS:
            return {
                ...state,
                questions:action.payload,
                isQtnsFetched:true
            };
        case FETCH_QUESTION_DETAILS:
            return {
                ...state,
                singleQuestion:action.payload,
                isQtnDetailsFetched:true
            };
            case FETCH_QUESTION_REPLIES:
                return {
                    ...state,
                    reply:action.payload,
                    isQtnRepliesFetched:true
                };
        case FETCH_QUESTIONS_ERROR:
            return {
                ...state,
                fetchQtnError:action.payload
            };
        case FETCH_QUESTION_DETAILS_ERROR:
            return {
                ...state,
                fetchQtnDetailsError:action.payload
            };
        case FETCH_QUESTION_REPLIES_ERROR:
            return {
                ...state,
                fetchQtnRepliesError:action.payload
            };
        default:
            return state;
    }
};


export default questions;