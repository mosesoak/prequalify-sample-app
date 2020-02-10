import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitQualifyForm } from '../state/qualifyForm/actions';
import { AppState } from '../state/rootReducer';

export const Landing = () => {
  const dispatch = useDispatch();
  let { loading, error } = useSelector(
    (state: AppState) => state.qualifyFormReducer,
  );

  useEffect(() => {
    if (error) {
      alert(error);
    }
  });

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // otherwise React warns that form is not connected
    dispatch(submitQualifyForm());
  };

  if (loading) {
    return <div>One moment...</div>;
  }

  return (
    <form id="qualify-form" onSubmit={submitForm}>
      <label>
        Auto Price
        <span className="input-prefix">$</span>
        <input required id="price" type="text" />
      </label>

      <label>
        Auto Make
        <span className="input-prefix" />
        <input required id="make" type="text" />
      </label>

      <label>
        Auto Model
        <span className="input-prefix" />
        <input required id="model" type="text" />
      </label>

      <label>
        Your Estimated Annual Income
        <span className="input-prefix">$</span>
        <input required id="annualIncome" type="text" />
      </label>

      <label>
        Your Credit Score
        <span className="input-prefix" />
        <input required id="creditScore" type="text" />
      </label>

      <div>
        <input type="submit" value="Submit Form" />
      </div>
    </form>
  );
};
