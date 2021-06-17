import operate from '../logic/operate';

it('return result 1', () => {
  const total = '5';
  const next = '2';
  const operation = '+';
  const t = operate(total, next, operation);
  expect(t).toBe('7');
});

it('return result 2', () => {
  const total = '5';
  const next = '2';
  const operation = '-';
  const t = operate(total, next, operation);
  expect(t).toBe('3');
});

it('return result 3', () => {
  const total = '5';
  const next = '2';
  const operation = 'X';
  const t = operate(total, next, operation);
  expect(t).toBe('10');
});

it('return result 4', () => {
  const total = '12';
  const next = '4';
  const operation = '/';
  const t = operate(total, next, operation);
  expect(t).toBe('3');
});

it('return result 5', () => {
  const total = '10';
  const next = '3';
  const operation = '%';
  const t = operate(total, next, operation);
  expect(t).toBe('1');
});