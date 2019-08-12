import {LOADING, POST_QUESTION,POST_QUESTION_ERROR} from "../types";

let initialState = {
    question: {},
    postError:"",
    isPosted: false,
    isLoading: false,
};


const postQtnReducer=(state=initialState,action)=>{
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
        default:
            return state;
    }
};


export default postQtnReducer;