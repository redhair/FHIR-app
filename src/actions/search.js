import { SET_QUERY, SET_RESULTS } from '../constants';

export const setQuery = query => {
  return {
    type: SET_QUERY,
    query
  };
};

export const setResults = results => {
  return {
    type: SET_RESULTS,
    results
  };
};
