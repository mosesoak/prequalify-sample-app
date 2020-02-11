import { createReducer } from '@reduxjs/toolkit';
import { submitCreateAcctError, submitCreateAcctSuccess } from '../createAcct';
import { submitQualifyError, submitQualifySuccess } from '../qualifyForm';
import { SystemState } from './';

const initialState: SystemState = {
  isPrequalified: false,
  notQualifiedReason: undefined,
  isLoggedIn: false,
};

// Action payload types are inferred (wow!) using addCase syntax:
// https://redux-starter-kit.js.org/usage/usage-with-typescript#building-type-safe-reducer-argument-objects
// RTK also uses Immer for succinct state updates:
// https://redux-starter-kit.js.org/tutorials/intermediate-tutorial#mutable-update-logic

export const systemReducer = createReducer(initialState, (builder) => {
  builder.addCase(submitQualifySuccess, (state, action) => {
    state.isPrequalified = action.payload.is_qualified;
    state.notQualifiedReason = action.payload.reason;
  });

  builder.addCase(submitQualifyError, (state, action) => {
    state.isPrequalified = false;
    state.notQualifiedReason = undefined;
  });

  builder.addCase(submitCreateAcctSuccess, (state, action) => {
    state.isLoggedIn = action.payload.created;
  });

  builder.addCase(submitCreateAcctError, (state, action) => {
    state.isLoggedIn = false;
  });
});
