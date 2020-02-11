import { createReducer } from '@reduxjs/toolkit';
import {
  createAcctChange,
  CreateAcctState,
  submitCreateAcctError,
  submitCreateAcctStart,
  submitCreateAcctSuccess,
} from './';

const initialState: CreateAcctState = {
  loading: false,
  username: '',
  password: '',
};

export const createAcctReducer = createReducer(initialState, (builder) => {
  builder.addCase(createAcctChange, (state, action) => {
    const { id, value } = action.payload;
    if (id === 'username' || id === 'password') {
      state[id] = value || '';
    }
  });

  builder.addCase(submitCreateAcctStart, (state, action) => {
    state.loading = true;
    state.error = undefined;
  });

  builder.addCase(submitCreateAcctSuccess, (state, action) => {
    state.loading = false;
    state.error = undefined;
  });

  builder.addCase(submitCreateAcctError, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });
});
