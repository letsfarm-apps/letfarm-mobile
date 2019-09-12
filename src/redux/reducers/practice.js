import {LOADING, FETCH_PRACTICES,FETCH_PRACTICES_ERROR,FETCH_PRACTICE_DETAILS,FETCH_PRACTICE_DETAILS_ERROR} from "../types";

let initialState = {
    
    practices:[],
    fetchPracticesError:"",
    isPracticesFetched:false,
    isLoading: false,
    practice:{},
    fetchPracticeDetailsError:"",
    isPracticeDetailsFetched:false,
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
        case FETCH_PRACTICE_DETAILS:
            return {
                ...state,
                practice:action.payload,
                isPracticeDetailsFetched:true
            };
        case FETCH_PRACTICE_DETAILS_ERROR:
            return {
                ...state,
                fetchPracticeDetailsError:action.payload
            }
        default:
            return state;
    }
};


export default practices;