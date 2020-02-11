import React from 'react';
import renderer from 'react-test-renderer';
import { Landing } from './landing';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

// Shows a simple snapshot testing setup for components with a mock redux store

const middlewares: any[] = [];
const mockStore = configureStore(middlewares);
const initialState = {
  systemReducer: {
    isPrequalified: false,
    notQualifiedReason: undefined,
    isLoggedIn: false,
  },
  qualifyFormReducer: {
    loading: false,
    price: 123,
    make: 'foo',
    model: 'bar',
    annualIncome: 123,
    creditScore: 123,
  },
};

test('Page renders correctly', () => {
  const store = mockStore(initialState);
  const tree = renderer
    .create(
      <Provider store={store}>
        <Landing />
      </Provider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
