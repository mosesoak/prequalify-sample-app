import {
  api,
  badRequestMessage,
  firstTryErrorMessage,
  maxPrice,
  minCreditScore,
} from './api';

// Integration tests against the mock service, which is written to throw an error on first try

const baseData = {
  price: 123,
  make: 'foo',
  model: 'bar',
  annualIncome: 123,
  creditScore: 123,
};

it('First mock call fails generically', async () => {
  await expect(api.prequalify(baseData)).rejects.toThrow(firstTryErrorMessage);
});

it('Service rejects out of range price', async () => {
  await expect(
    api.prequalify({ ...baseData, price: maxPrice + 1 }),
  ).rejects.toEqual(badRequestMessage);
});

it('Does not qualify based on income', async () => {
  const result = await api.prequalify({
    ...baseData,
    annualIncome: 1,
  });
  expect(result.is_qualified).toBeFalsy();
  expect(result.reason).toBeDefined();
});

it('Does not qualify based on credit score', async () => {
  const result = await api.prequalify({
    ...baseData,
    annualIncome: 100000,
    creditScore: minCreditScore - 100,
  });
  expect(result.is_qualified).toBeFalsy();
  expect(result.reason).toBeDefined();
});

it('Qualifies', async () => {
  const result = await api.prequalify({
    ...baseData,
    annualIncome: 100000,
    creditScore: minCreditScore + 100,
  });
  expect(result.is_qualified).toBeTruthy();
  expect(result.reason).toBeUndefined();
});
