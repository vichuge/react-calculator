import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  switch (buttonName) {
    case '+/-':
      total *= -1;
      next *= -1;
      break;
    case 'AC':
      total = null;
      next = null;
      operation = null;
      break;
    case '%':
      total = total + operation + next;
      break;
    case '.':
      total = `${total}.`;
      break;
    case '=':
      if (!total || !next || !operation) return 0;
      total = (total + operation + next).toString();
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
      if (!total) total = buttonName;
      if (total && !next) next = buttonName;
      break;
    case '+':
    case '-':
    case 'x':
    case '/':
      total = operate(total, next, operation);
      break;
    default:
      total = 'Error!';
  }
  return data;
};

export default calculate;
