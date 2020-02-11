import { createAction } from '@reduxjs/toolkit';
import { api, CreateAcctResponse } from '../../api';
import { AppState } from '../rootReducer';
import { AppDispatch, AppThunk } from '../store';
import { withPayloadType } from '../util';
import { CreateAcctChangePayload } from './';

// The pattern of storing form state in Redux isn't very scalable.
// For a production build I might go with React Final Form.
// For now a quick copy/paste from the qualifyForm will do!

export const createAcctChange = createAction(
  'CREATE_ACCT_FORM_CHANGE',
  withPayloadType<CreateAcctChangePayload>(),
);

export const submitCreateAcct = (): AppThunk => async (
  dispatch: AppDispatch,
  getState: () => AppState,
) => {
  dispatch(submitCreateAcctStart());
  try {
    const result = await api.createAccount(getState().createAcctReducer);
    dispatch(submitCreateAcctSuccess(result));
  } catch (error) {
    dispatch(submitCreateAcctError(error.message || 'Error submitting form!'));
  }
};

export const submitCreateAcctStart = createAction(
  'SUBMIT_CREATE_ACCT_FORM_START',
);

export const submitCreateAcctSuccess = createAction(
  'SUBMIT_CREATE_ACCT_FORM_SUCCESS',
  withPayloadType<CreateAcctResponse>(),
);

export const submitCreateAcctError = createAction(
  'SUBMIT_CREATE_ACCT_FORM_ERROR',
  withPayloadType<string>(),
);
