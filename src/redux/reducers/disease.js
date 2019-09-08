import {LOADING,FETCH_DISEASES,FETCH_DISEASES_ERROR,FETCH_DISEASE_DETAILS,FETCH_DISEASE_DETAILS_ERROR} from "../types";

let initialState = {
    
    diseases:[],
    fetchDiseasesError:"",
    isDiseasesFetched:false,
    isLoading: false,
    disease:{},
    fetchDiseaseDetailsError:"",
    isDiseaseDetailsFetched:false
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
            };
        case FETCH_DISEASE_DETAILS:
            return {
                ...state,
                disease:action.payload,
                isDiseaseDetailsFetched:true
            };
        case FETCH_DISEASE_DETAILS_ERROR:
            return {
                ...state,
                fetchDiseaseDetailsError:action.payload
            };
        default:
            return state;
    }
};


export default diseases;