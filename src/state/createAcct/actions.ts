import { api } from '../../api/api';
import { AppState } from '../rootReducer';
import { AppDispatch, AppThunk } from '../store';
import {
  submitCAFormErrorActionType,
  submitCAFormStartActionType,
  submitCAFormSuccessActionType,
} from './types';

export const submitCreateAcct = (): AppThunk => async (
  dispatch: AppDispatch,
  getState: () => AppState,
) => {
  dispatch(submitCAFormStartActionType());
  try {
    const result = await api.createAccount(getState().createAcctReducer);
    dispatch(submitCAFormSuccessActionType(result));
  } catch (error) {
    dispatch(submitCAFormErrorActionType(error || 'Error submitting form!'));
  }
};
