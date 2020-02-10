import { createReducer } from '@reduxjs/toolkit';
import {
  QualifyFormState,
  submitQFormErrorActionType,
  submitQFormStartActionType,
  submitQFormSuccessActionType,
} from './types';

const initialState: QualifyFormState = {
  loading: false,
  price: 123,
  make: 'foo',
  model: 'bar',
  annualIncome: 123,
  creditScore: 123,
};

export const qualifyFormReducer = createReducer(initialState, (builder) => {
  builder.addCase(submitQFormStartActionType, (state, action) => {
    state.loading = true;
    state.error = undefined;
  });

  builder.addCase(submitQFormSuccessActionType, (state, action) => {
    state.loading = false;
    state.error = undefined;
  });

  builder.addCase(submitQFormErrorActionType, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });
});
