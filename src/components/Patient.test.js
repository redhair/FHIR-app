import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Patient from './Patient';

const store = createStore(rootReducer, applyMiddleware(thunk));

describe('Patient', () => {
  it('works', () => {
    const patient = {
      id: '12345',
      name: 'John',
      gender: 'Male',
      birthDate: '10/10/1990'
    };
    render(
      <Router>
        <Provider store={store}>
          <Patient patient={patient} />
        </Provider>
      </Router>
    );
  });
});
