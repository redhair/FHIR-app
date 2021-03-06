import React from 'react';
import { render } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import SearchPage from './SearchPage';

const store = createStore(rootReducer, applyMiddleware(thunk));

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <SearchPage />
    </Provider>
  );
});
