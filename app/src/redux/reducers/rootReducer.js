import { combineReducers } from 'redux';
import userReducer from './userReducer';
import doubleMeaningReducer from './doubleMeaningReducer';

const rootReducer = combineReducers({
    userReducer,
    doubleMeaningReducer
});

export default rootReducer;