import { createAction } from '@reduxjs/toolkit';
import { CreateAcctResponse } from '../../api/types';
import { withPayloadType } from '../util';

export type CreateAcctState = {
  loading?: boolean;
  error?: string;
  username: string;
  password: string;
};

export type CreateAcctChangePayload = {
  id: keyof CreateAcctState;
  value: any;
};

// The pattern of storing form state in Redux isn't very scalable.
// For a production build I might go with React Final Form.
// For now a quick copy/paste from the qualifyForm will do!

export const createAcctChangeActionType = createAction(
  'CREATE_ACCT_FORM_CHANGE',
  withPayloadType<CreateAcctChangePayload>(),
);

export const submitCAFormActionType = createAction(
  'SUBMIT_CREATE_ACCT_FORM',
  withPayloadType<CreateAcctState>(),
);

export const submitCAFormStartActionType = createAction(
  'SUBMIT_CREATE_ACCT_FORM_START',
);

export const submitCAFormSuccessActionType = createAction(
  'SUBMIT_CREATE_ACCT_FORM_SUCCESS',
  withPayloadType<CreateAcctResponse>(),
);

export const submitCAFormErrorActionType = createAction(
  'SUBMIT_CREATE_ACCT_FORM_ERROR',
  withPayloadType<string>(),
);
