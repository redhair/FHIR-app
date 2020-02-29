import { SET_LOADING, SET_INIT } from '../constants';

export const setLoading = loading => {
  return {
    type: SET_LOADING,
    loading
  };
};

export const setInit = init => {
  return {
    type: SET_INIT,
    init
  };
};
