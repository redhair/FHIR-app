import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import PatientInfo from './PatientInfo';

const store = createStore(rootReducer, applyMiddleware(thunk));

test('renders learn react link', () => {
  render(
    <Router>
      <Provider store={store}>
        <PatientInfo />
      </Provider>
    </Router>
  );
});
