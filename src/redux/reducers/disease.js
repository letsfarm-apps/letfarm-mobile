import {LOADING,FETCH_DISEASES,FETCH_DISEASES_ERROR} from "../types";

let initialState = {
    
    diseases:[],
    fetchDiseasesError:"",
    isDiseasesFetched:false,
    isLoading: false,
};


const diseases=(state=initialState,action)=>{
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        case FETCH_DISEASES:
            return {
                ...state,
                diseases:action.payload,
                isDiseasesFetched:true
            };
        case FETCH_DISEASES_ERROR:
            return {
                ...state,
                fetchDiseasesError:action.payload
            }
        default:
            return state;
    }
};


export default diseases;