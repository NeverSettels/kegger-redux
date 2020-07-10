import beerListReducer from './beer-list-reducer'

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  beerList: beerListReducer
});

export default rootReducer;