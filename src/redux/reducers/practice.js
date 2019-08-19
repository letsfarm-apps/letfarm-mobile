import {LOADING, FETCH_PRACTICES,FETCH_PRACTICES_ERROR} from "../types";

let initialState = {
    
    practices:[],
    fetchPracticesError:"",
    isPracticesFetched:false,
    isLoading: false,
};


const practices=(state=initialState,action)=>{
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case FETCH_PRACTICES:
            return {
                ...state,
                practices:action.payload,
                isPracticesFetched:true
            };
        case FETCH_PRACTICES_ERROR:
            return {
                ...state,
                fetchPracticesError:action.payload
            }
        default:
            return state;
    }
};


export default practices;