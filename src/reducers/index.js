import beerListReducer from './beer-list-reducer'
import formCreateReducer from "./form-reducer";

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  beerList: beerListReducer,
  formCreate: formCreateReducer
});

export default rootReducer;