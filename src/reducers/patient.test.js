import patient from './patient';

describe('reducers', () => {
  describe('patient', () => {
    const initialState = {};

    it('should provide the initial state', () => {
      expect(patient(undefined, {})).toEqual(initialState);
    });

    it('should handle SET_ACTIVE_PATIENT action', () => {
      const mockPatient = {
        name: 'John',
        gender: 'Male',
        birthDate: '10/10/1990'
      };
      expect(patient({}, { type: 'SET_ACTIVE_PATIENT', patient: mockPatient })).toEqual(mockPatient);
    });
  });
});
