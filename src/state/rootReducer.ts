import { combineReducers } from '@reduxjs/toolkit';
import { createAcctReducer } from './createAcct/reducers';
import { qualifyFormReducer } from './qualifyForm/reducers';
import { systemReducer } from './system/reducers';

export const rootReducer = combineReducers({
  systemReducer,
  qualifyFormReducer,
  createAcctReducer,
});

// From: https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-state-type

export type AppState = ReturnType<typeof rootReducer>;
