import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitQualifyForm } from '../state/qualifyForm/actions';
import {
  qualifyFormChangeActionType,
  QualifyFormState,
} from '../state/qualifyForm/types';
import { AppState } from '../state/rootReducer';

export const Landing = () => {
  const dispatch = useDispatch();
  let {
    loading,
    error,
    price,
    make,
    model,
    annualIncome,
    creditScore,
  } = useSelector((state: AppState) => state.qualifyFormReducer);

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

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { id, value } = event.currentTarget;
    dispatch(
      qualifyFormChangeActionType({
        id: id as keyof QualifyFormState,
        value: value,
      }),
    );
  };

  return (
    <form id="qualify-form" onSubmit={submitForm}>
      <label>
        Auto Price
        <span className="input-prefix">$</span>
        <input
          required
          id="price"
          type="text"
          onChange={handleChange}
          value={price?.toLocaleString('en') || ''}
        />
      </label>

      <label>
        Auto Make
        <span className="input-prefix" />
        <input
          required
          id="make"
          type="text"
          onChange={handleChange}
          value={make || ''}
        />
      </label>

      <label>
        Auto Model
        <span className="input-prefix" />
        <input
          required
          id="model"
          type="text"
          onChange={handleChange}
          value={model || ''}
        />
      </label>

      <label>
        Your Estimated Annual Income
        <span className="input-prefix">$</span>
        <input
          required
          id="annualIncome"
          type="text"
          onChange={handleChange}
          value={annualIncome || ''}
        />
      </label>

      <label>
        Your Credit Score
        <span className="input-prefix" />
        <input
          required
          id="creditScore"
          type="text"
          onChange={handleChange}
          value={creditScore?.toLocaleString('en') || ''}
        />
      </label>

      <div>
        <input type="submit" value="Submit Form" />
      </div>
    </form>
  );
};
