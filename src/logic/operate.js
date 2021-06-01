import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const n1 = Big(numberOne);
  const n2 = Big(numberTwo);
  switch (operation) {
    case '+':
      return Math.add(n1, n2);
    case '-':
      return Math.sustract(n1, n2);
    case 'x':
      return Math.multiply(n1, n2);
    case '/':
      return Math.divide(n1, n2);
    case '%':
      return n1 * (n2 * 0.01);
    default:
      return 'Error!';
  }
};

export default operate;
