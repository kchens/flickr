import images from './images';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
    images,
    routing: routerReducer,
});

export default rootReducer;