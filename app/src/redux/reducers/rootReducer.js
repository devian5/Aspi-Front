import { combineReducers } from 'redux';
import userReducer from './userReducer';
import doubleMeaningReducer from './doubleMeaningReducer';
import feelingReducer from './feelingReducer';

const rootReducer = combineReducers({
    userReducer,
    doubleMeaningReducer,
    feelingReducer
});

export default rootReducer;