import { SET_LOADING } from '../constants';

const initialState = false;

const patient = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return action.loading;
    default:
      return state;
  }
};

export default patient;
