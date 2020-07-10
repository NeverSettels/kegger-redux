import { TOGGLE_CREATE } from '../actions/actionTypes'
export default (state = false, action) => {
  switch (action.type) {
    case TOGGLE_CREATE:
      return !state
    default:
      return state;
  }
};