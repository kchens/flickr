import images from './images';
import favorites from './favorites';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
    images,
    favorites,
    routing: routerReducer,
});

export default rootReducer;