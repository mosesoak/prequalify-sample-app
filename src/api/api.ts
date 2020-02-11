import { CreateAcctResponse, PrequalifyResponse } from '.';
import { CreateAcctState } from '../state/createAcct';
import { QualifyFormState } from '../state/qualifyForm';

// Endpoints may throw. Wrap calls in try/catch and handle errors appropriately.
export const api = {
  prequalify: async (data: QualifyFormState) => {
    return await __prequalifyMockEndpoint(data);
  },
  createAccount: async (data: CreateAcctState) => {
    return await __createAccountMockEndpoint(data);
  },
};

// Mock Service

export const badRequestMessage = 'Bad request';

export const firstTryErrorMessage =
  'Mock server error on first request. Try again.';

export const priceToIncomeRatio = 1 / 5;
export const minCreditScore = 600;
export const maxPrice = 1000000;

let delaySeconds = 1;
let tries = 0;

async function __prequalifyMockEndpoint(
  data: QualifyFormState,
): Promise<PrequalifyResponse> {
  return new Promise((resolve, reject) => {
    if (++tries === 1) {
      throw new Error(firstTryErrorMessage);
    }
    setTimeout(() => {
      // first try: mock a thrown error to be sure we can handle it
      if (
        !data ||
        !data.annualIncome ||
        !data.creditScore ||
        !data.make ||
        !data.model ||
        !data.price ||
        // validate maximum price
        data.price > maxPrice
      ) {
        reject(badRequestMessage);
      } else if (
        // validate score
        data.creditScore < minCreditScore ||
        // validate price
        data.price > data.annualIncome * priceToIncomeRatio
      ) {
        resolve({
          is_qualified: false,
          reason: 'Sorry, you are not qualified for this purchase',
        });
      }

      // Success!
      resolve({ is_qualified: true });
    }, delaySeconds * 1000);
  });
}

async function __createAccountMockEndpoint(
  data: CreateAcctState,
): Promise<CreateAcctResponse> {
  if (!data || !data.username || !data.password) {
    return Promise.reject(badRequestMessage);
  }
  return Promise.resolve({ created: true });
}
