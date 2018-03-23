import { combineReducers } from 'redux';
// import AuthReducer from './auth';
import registerReducer from './register.js';

const rootReducer = combineReducers({
  register: registerReducer,
});

export default rootReducer;
