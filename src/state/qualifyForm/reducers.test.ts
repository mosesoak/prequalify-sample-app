import { qualifyFormReducer } from './reducers';
import { qualifyFormChangeActionType, QualifyFormState } from './types';

// Shows how redux logic can be unit tested

const initialState: QualifyFormState = {
  loading: false,
  price: 123,
  make: 'foo',
  model: 'bar',
  annualIncome: 123,
  creditScore: 123,
};

describe('qualify form reducer', () => {
  // string value gets set
  it('should handle QUALIFY_FORM_CHANGE', () => {
    expect(
      qualifyFormReducer(initialState, {
        type: qualifyFormChangeActionType.type,
        payload: {
          id: 'make',
          value: 'asdf',
        },
      }),
    ).toEqual({
      ...initialState,
      make: 'asdf',
    });

    // Number strings get converted properly
    expect(
      qualifyFormReducer(initialState, {
        type: qualifyFormChangeActionType.type,
        payload: {
          id: 'price',
          value: '12,345',
        },
      }),
    ).toEqual({
      ...initialState,
      price: 12345,
    });
  });
});
