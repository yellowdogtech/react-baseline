import { combineReducers } from 'redux';
import courses from './courseReducer';
import owners from './ownerReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  courses,
  owners,
  authors
});

export default rootReducer;
