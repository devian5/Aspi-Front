import { SEARCH, CLEAR_SEARCH } from '../types/meaningTypes';

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
        case CLEAR_SEARCH:
            return initialState
        default:
            return state
    }
};

export default meaningReducer;