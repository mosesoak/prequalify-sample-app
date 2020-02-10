import { AppState } from '../rootReducer';
import { AppDispatch, AppThunk } from '../store';
import { submitQFormErrorActionType } from './types';
import {
  submitQFormStartActionType,
  submitQFormSuccessActionType,
} from './types';
import { api } from '../../api/api';

export const submitQualifyForm = (): AppThunk => async (
  dispatch: AppDispatch,
  getState: () => AppState,
) => {
  dispatch(submitQFormStartActionType());
  try {
    const result = await api.prequalify(getState().qualifyFormReducer);
    dispatch(submitQFormSuccessActionType(result));
  } catch (error) {
    dispatch(submitQFormErrorActionType(error || 'Error submitting form!'));
  }
};
