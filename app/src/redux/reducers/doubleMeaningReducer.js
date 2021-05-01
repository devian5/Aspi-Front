import { SEARCH } from '../types/meaningTypes';

const initialState = {
    query: []
};

const meaningReducer = (state = initialState, action) => {
    switch(action.type){
        case SEARCH : 
            return {
                ...state,
                query : action.payload
            }    
        
        default:
            return state
    }
};

export default meaningReducer;