import { createReducer } from '@reduxjs/toolkit';
import {
  submitQFormErrorActionType,
  submitQFormSuccessActionType,
} from '../qualifyForm/types';
import { SystemState } from './types';

const initialState: SystemState = {
  isPrequalified: false,
  notQualifiedReason: undefined,
  isLoggedIn: false,
};

export const systemReducer = createReducer(initialState, (builder) => {
  builder.addCase(submitQFormSuccessActionType, (state, action) => {
    state.isPrequalified = action.payload.is_qualified;
    state.notQualifiedReason = action.payload.reason;
  });

  builder.addCase(submitQFormErrorActionType, (state, action) => {
    state.isPrequalified = false;
    state.notQualifiedReason = undefined;
  });
});
