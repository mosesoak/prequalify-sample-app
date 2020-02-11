import { createReducer } from '@reduxjs/toolkit';
import {
  qualifyFormChange,
  QualifyFormState,
  submitQualifyError,
  submitQualifyFormStart,
  submitQualifySuccess,
} from './';

const initialState: QualifyFormState = {
  loading: false,

  /* 
  // for dev, uncomment these to prepopulate the form
  price: 10000,
  make: 'foo',
  model: 'bar',
  annualIncome: 123000,
  creditScore: 800,
  */
};

export const qualifyFormReducer = createReducer(initialState, (builder) => {
  builder.addCase(qualifyFormChange, (state, action) => {
    const { id, value } = action.payload;
    switch (id) {
      case 'price':
      case 'annualIncome':
      case 'creditScore':
        const num = parseInt(value?.replace(/,/g, ''), 10);
        state[id] = !isNaN(num) ? num : undefined;
        break;
      default:
        state[id] = value;
    }
  });

  builder.addCase(submitQualifyFormStart, (state, action) => {
    state.loading = true;
    state.error = undefined;
  });

  builder.addCase(submitQualifySuccess, (state, action) => {
    state.loading = false;
    state.error = undefined;
  });

  builder.addCase(submitQualifyError, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });
});
