import calculate from '../logic/calculate';

it('return result +/-', () => {
  const total = '7';
  const next = null;
  const operation = null;
  const buttonName = '+/-';
  const result = calculate({ total, next, operation }, buttonName);
  expect(result.total).toBe(-7);
});

it('return result AC', () => {
  const total = '7';
  const next = '8';
  const operation = '+';
  const buttonName = 'AC';
  const result = calculate({ total, next, operation }, buttonName);
  expect(result).toStrictEqual({ total: null, next: null, operation: null });
});

it('return result .', () => {
  const total = '8';
  const next = null;
  const operation = null;
  const buttonName = '.';
  const result = calculate({ total, next, operation }, buttonName);
  expect(result.total).toBe('8.');
});

it('return result +', () => {
  const total = '1';
  const next = '2';
  const operation = '+';
  const buttonName = '=';
  const result = calculate({ total, next, operation }, buttonName);
  expect(result.total).toBe('3');
});

it('return result -', () => {
  const total = '4';
  const next = '3';
  const operation = '-';
  const buttonName = '=';
  const result = calculate({ total, next, operation }, buttonName);
  expect(result.total).toBe('1');
});

it('return result X', () => {
  const total = '5';
  const next = '6';
  const operation = 'X';
  const buttonName = '=';
  const result = calculate({ total, next, operation }, buttonName);
  expect(result.total).toBe('30');
});

it('return result %', () => {
  const total = '100';
  const next = '50';
  const operation = '+';
  const buttonName = '%';
  const result = calculate({ total, next, operation }, buttonName);
  expect(result.total).toBe('150');
});
