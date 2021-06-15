import calculate from '../logic/calculate';

it('return result 1', () => {
  const total = '5';
  const next = '2';
  const operation = '+';
  const buttonName = '=';
  const result = calculate({ total, next, operation }, buttonName);
  expect(result.total).toBe('7');
});

it('return result 2', () => {
  const total = '5';
  const next = '2';
  const operation = '-';
  const buttonName = '=';
  const result = calculate({ total, next, operation }, buttonName);
  expect(result.total).toBe('3');
});

it('return result 3', () => {
  const total = '9';
  const next = '3';
  const operation = '/';
  const buttonName = '=';
  const result = calculate({ total, next, operation }, buttonName);
  expect(result.total).toBe('3');
});