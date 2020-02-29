import { SET_LOADING, SET_INIT } from '../constants';

const initialState = {
  loading: false,
  init: false
};

const patient = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading
      };
    case SET_INIT: {
      return {
        ...state,
        init: action.init
      };
    }
    default:
      return state;
  }
};

export default patient;
