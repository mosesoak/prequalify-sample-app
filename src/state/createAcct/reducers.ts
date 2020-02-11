import { createReducer } from '@reduxjs/toolkit';
import {
  createAcctChangeActionType,
  CreateAcctState,
  submitCAFormErrorActionType,
  submitCAFormStartActionType,
  submitCAFormSuccessActionType,
} from './types';

const initialState: CreateAcctState = {
  loading: false,
  username: '',
  password: '',
};

export const createAcctReducer = createReducer(initialState, (builder) => {
  builder.addCase(createAcctChangeActionType, (state, action) => {
    const { id, value } = action.payload;
    if (id === 'username' || id === 'password') {
      state[id] = value || '';
    }
  });

  builder.addCase(submitCAFormStartActionType, (state, action) => {
    state.loading = true;
    state.error = undefined;
  });

  builder.addCase(submitCAFormSuccessActionType, (state, action) => {
    state.loading = false;
    state.error = undefined;
  });

  builder.addCase(submitCAFormErrorActionType, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });
});
