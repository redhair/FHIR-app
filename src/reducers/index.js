import { combineReducers } from 'redux';
import searchReducer from './search';
import patientReducer from './patient';

const rootReducer = combineReducers({
  search: searchReducer,
  patient: patientReducer
});

export default rootReducer;
