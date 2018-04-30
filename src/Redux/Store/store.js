import { createStore, combineReducers } from 'redux';
import { firstReducer, secondReducer } from '../Reducer/reducer';

const store = createStore( combineReducers({
    firstReducer,
    secondReducer
}) );

export default store;