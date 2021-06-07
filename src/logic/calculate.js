import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  switch (buttonName) {
    case '+/-':
      if (total && !next) total *= -1;
      if (total && next) next *= -1;
      break;
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '.':
      if (total && !operation) {
        if (total && !total.includes('.')) total = `${total}.`;
      }
      if (total && operation) {
        if (next && !next.includes('.')) next = `${next}.`;
        if (!next) next = '0.';
      }
      if (!total) total = '0.';
      break;
    case '=':
      if (total && next && operation) {
        total = operate(total, next, operation);
      }
      if (!operation) {
        total = null;
      }
      next = null;
      operation = null;
      break;
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (total && !operation) total += buttonName;
      if (total && operation && next) next += buttonName;
      if (total && operation && !next) next = buttonName;
      if (!total) total = buttonName;
      break;
    case '+':
    case '-':
    case 'X':
    case '/':
    case '%':
      if (total && !next) operation = buttonName;
      if (!total) {
        total = '0';
        operation = buttonName;
      }
      if (total && next && operation) {
        total = operate(total, next, operation);
        operation = buttonName;
        if (operation === '%') operation = null;
        next = null;
      }
      break;
    default:
      total = 'Error!';
  }
  console.log({ total, next, operation });
  return { total, next, operation };
};

export default calculate;
