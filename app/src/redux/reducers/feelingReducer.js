import { SAVE } from '../types/feelingTypes';

const initialState = {
    feeling: []
};

const feelingReducer = (state = initialState, action) => {
    switch(action.type){
        case SAVE : 
            return {
                ...state,
                query : action.payload
            }    
        
        default:
            return state
    }
};

export default feelingReducer;