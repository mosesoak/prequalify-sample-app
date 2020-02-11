import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitCreateAcct } from '../state/createAcct/actions';
import {
  createAcctChangeActionType,
  CreateAcctState,
} from '../state/createAcct/types';
import { AppState } from '../state/rootReducer';

export const CreateAcct = () => {
  const dispatch = useDispatch();
  let { loading, error, username, password } = useSelector(
    (state: AppState) => state.createAcctReducer,
  );

  useEffect(() => {
    if (error) {
      alert(error);
    }
  });

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // otherwise React warns that form is not connected
    dispatch(submitCreateAcct());
  };

  if (loading) {
    return <div>One moment...</div>;
  }

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { id, value } = event.currentTarget;
    dispatch(
      createAcctChangeActionType({
        id: id as keyof CreateAcctState,
        value: value,
      }),
    );
  };

  return (
    <form id="create-acct-form" onSubmit={submitForm}>
      <label>
        Username
        <input
          required
          id="username"
          type="text"
          onChange={handleChange}
          value={username || ''}
        />
      </label>

      <label>
        Password
        <input
          required
          id="password"
          type="password"
          onChange={handleChange}
          value={password || ''}
        />
      </label>

      <div>
        <input type="submit" value="Submit Form" />
      </div>
    </form>
  );
};
