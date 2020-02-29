import search from './search';

describe('reducers', () => {
  describe('search', () => {
    const initialState = { query: '', results: [] };

    it('should provide the initial state', () => {
      expect(search(undefined, {})).toEqual(initialState);
    });

    it('should handle SET_QUERY action', () => {
      const query = 'test';
      expect(search({}, { type: 'SET_QUERY', query })).toEqual({ query });
    });

    it('should handle SET_RESULTS action', () => {
      const results = [];
      expect(search({}, { type: 'SET_RESULTS', results })).toEqual({ results });
    });
  });
});
