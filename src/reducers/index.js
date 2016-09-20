import { combineReducers } from 'redux';
import courses from './courseReducer';
import owners from './ownerReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  owners,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
