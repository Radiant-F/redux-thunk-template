import {combineReducers} from 'redux';

import todos from './todos';
import auth from './auth';
import loading from './loading';
export default combineReducers({
  todos,
  auth,
  loading,
});
