import {LOADING, FETCH_CATEGORIES,FETCH_CATEGORIES_ERROR} from "../types";

let initialState = {
    
    categories:[],
    fetchCategoriesError:"",
    isCategoriesFetched:false,
    isLoading: false,
};


const categories=(state=initialState,action)=>{
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case FETCH_CATEGORIES:
            return {
                ...state,
                categories:action.payload,
                isCategoriesFetched:true
            };
        case FETCH_CATEGORIES_ERROR:
            return {
                ...state,
                fetchCategoriesError:action.payload
            }
        default:
            return state;
    }
};


export default categories;