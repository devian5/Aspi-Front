import { SAVE,CLEAR } from '../types/feelingTypes';

const initialState = {
    query: []
};

const feelingReducer = (state = initialState, action) => {
    switch(action.type){
        case SAVE : 
            return {
                ...state,
                query : action.payload
            }    
        case CLEAR:
            return initialState

        default:
            return state
    }
};

export default feelingReducer;