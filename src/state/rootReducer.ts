import { combineReducers } from '@reduxjs/toolkit';
import { qualifyFormReducer } from './qualifyForm/reducers';

// From: https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-state-type

export const rootReducer = combineReducers({
  qualifyFormReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
