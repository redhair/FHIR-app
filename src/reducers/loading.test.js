import loading from './loading';

describe('reducers', () => {
  describe('loading', () => {
    const initialState = { loading: false, init: false };

    it('should provide the initial state', () => {
      expect(loading(undefined, {})).toEqual(initialState);
    });

    it('should handle SET_INIT action', () => {
      expect(loading({}, { type: 'SET_INIT', init: true })).toEqual({ init: true });
    });

    it('should handle SET_LOADING action', () => {
      expect(loading({}, { type: 'SET_LOADING', loading: true })).toEqual({ loading: true });
      expect(loading({}, { type: 'SET_LOADING', loading: false })).toEqual({ loading: false });
    });
  });
});
