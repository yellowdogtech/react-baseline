import { combineReducers } from 'redux';
import courses from './courseReducer';
import owners from './ownerReducer';

const rootReducer = combineReducers({
  courses,
  owners
});

export default rootReducer;
