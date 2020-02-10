import { createAction } from '@reduxjs/toolkit';
import { PrequalifyResponse } from '../../api/types';
import { withPayloadType } from '../util';

export type QualifyFormState = {
  loading?: boolean;
  error?: string;
  price?: number;
  make?: string;
  model?: string;
  annualIncome?: number;
  creditScore?: number;
};

export type QualifyFormChangePayload = {
  id: keyof QualifyFormState;
  value: any;
};

export const qualifyFormChangeActionType = createAction(
  'QUALIFY_FORM_CHANGE',
  withPayloadType<QualifyFormChangePayload>(),
);

export const submitQFormActionType = createAction(
  'SUBMIT_QUALIFY_FORM',
  withPayloadType<QualifyFormState>(),
);

export const submitQFormStartActionType = createAction(
  'SUBMIT_QUALIFY_FORM_START',
);

export const submitQFormSuccessActionType = createAction(
  'SUBMIT_QUALIFY_FORM_SUCCESS',
  withPayloadType<PrequalifyResponse>(),
);

export const submitQFormErrorActionType = createAction(
  'SUBMIT_QUALIFY_FORM_ERROR',
  withPayloadType<string>(),
);
