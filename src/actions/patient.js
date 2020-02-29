import { SET_ACTIVE_PATIENT } from '../constants';

export const setActivePatient = patient => {
  return {
    type: SET_ACTIVE_PATIENT,
    patient
  };
};
