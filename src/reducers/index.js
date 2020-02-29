import { combineReducers } from 'redux';
import searchReducer from './search';
import patientReducer from './patient';
import loadingReducer from './loading';

const rootReducer = combineReducers({
  search: searchReducer,
  patient: patientReducer,
  loading: loadingReducer
});

export default rootReducer;
