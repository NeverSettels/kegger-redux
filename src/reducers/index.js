import beerListReducer from './beer-list-reducer'
import formCreateReducer from "./form-reducer";
import detailsReducer from './details-reducer'

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  beerList: beerListReducer,
  formCreate: formCreateReducer,
  details: detailsReducer
});

export default rootReducer;