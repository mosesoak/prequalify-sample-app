import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { rootReducer, AppState } from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
});

// From: https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type

export type AppDispatch = typeof store.dispatch;

// From: https://redux-starter-kit.js.org/tutorials/advanced-tutorial/#adding-a-reusable-thunk-function-type

export type AppThunk = ThunkAction<void, AppState, unknown, Action<string>>;
