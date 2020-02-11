import { createAction } from '@reduxjs/toolkit';
import { api, PrequalifyResponse } from '../../api';
import { AppState } from '../rootReducer';
import { AppDispatch, AppThunk } from '../store';
import { withPayloadType } from '../util';
import { QualifyFormState } from './';

export type QualifyFormChangePayload = {
  id: keyof QualifyFormState;
  value: any;
};

export const qualifyFormChange = createAction(
  'QUALIFY_FORM_CHANGE',
  withPayloadType<QualifyFormChangePayload>(),
);

export const submitQualifyForm = (): AppThunk => async (
  dispatch: AppDispatch,
  getState: () => AppState,
) => {
  dispatch(submitQualifyFormStart());
  try {
    const result = await api.prequalify(getState().qualifyFormReducer);
    dispatch(submitQualifySuccess(result));
  } catch (error) {
    dispatch(submitQualifyError(error || 'Error submitting form!'));
  }
};

export const submitQualifyFormStart = createAction('SUBMIT_QUALIFY_FORM_START');

export const submitQualifySuccess = createAction(
  'SUBMIT_QUALIFY_FORM_SUCCESS',
  withPayloadType<PrequalifyResponse>(),
);

export const submitQualifyError = createAction(
  'SUBMIT_QUALIFY_FORM_ERROR',
  withPayloadType<string>(),
);
