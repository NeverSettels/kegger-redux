import { TOGGLE_DETAILS } from '../actions/actionTypes'
export default (state = false, action) => {
  switch (action.type) {
    case TOGGLE_DETAILS:
      return !state
    default:
      return state;
  }
};