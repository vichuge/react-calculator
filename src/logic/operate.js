import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const n1 = Big(numberOne);
  const n2 = Big(numberTwo);
  let result = '';
  switch (operation) {
    case '+':
      result = n1.plus(n2);
      break;
    case '-':
      result = n1.minus(n2);
      break;
    case 'X':
      result = n1.times(n2);
      break;
    case '/':
      result = n1.div(n2);
      break;
    case '%':
      result = n1.mod(n2);
      break;
    default:
      result = 'Error!';
  }
  return result.toString();
};

export default operate;
