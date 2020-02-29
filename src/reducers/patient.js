import { SET_ACTIVE_PATIENT } from '../constants';

const initialState = {};

const patient = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_PATIENT:
      return {
        ...state,
        ...action.patient
      };
    default:
      return state;
  }
};

export default patient;
