import * as types from '../actions/actionTypes';

export default function ownerReducer(state = [], action) {
  switch(action.type) {

    case types.LOAD_OWNERS_SUCCESS:
      return action.owners;

    default:
      return state;

  }
}
