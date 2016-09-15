import * as types from './actionTypes';
import ownerApi from '../api/ownerApi';

export function loadOwnersSuccess(owners) {
  return { type: types.LOAD_OWNERS_SUCCESS, owners };
}

export function loadOwners() {
  return function(dispatch) {
    return ownerApi.getAllOwners()
      .then(owners => {
        dispatch(loadOwnersSuccess(owners));
      })
      .catch(error => {
        throw error;
      });
  };
}


