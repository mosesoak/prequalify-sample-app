import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { rootReducer, AppState } from './rootReducer';

// From: https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, AppState, unknown, Action<string>>;
