import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = ({ total: initialTotal, next: initialNext, operation: initialOperation }) => {
  const [total, setTotal] = useState(initialTotal);
  const [next, setNext] = useState(initialNext);
  const [operation, setOperation] = useState(initialOperation);

  const handleClick = (buttonName) => {
    const result = calculate({ total, next, operation }, buttonName);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  let display = '';
  if (!total) display = '0';
  if (total) display = total;
  if (total && operation) display = total;
  if (total && operation && next) display = next;

  return (
    <>
      <Display result={display} />
      <ButtonPanel clickApp={handleClick} />
    </>
  );
};

App.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

App.defaultProps = {
  total: null,
  next: null,
  operation: null,
};

export default App;
