import { SET_QUERY, SET_RESULTS } from '../constants';

const initialState = {
  query: '',
  results: []
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUERY:
      return {
        ...state,
        query: action.query
      };
    case SET_RESULTS:
      return {
        ...state,
        results: action.results
      };
    default:
      return state;
  }
};

export default search;
