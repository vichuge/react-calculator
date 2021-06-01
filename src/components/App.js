import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

function App() {
  return (
    <>
      <h1>Calculator</h1>
      <Display result={calculate.total} />
      <ButtonPanel />
    </>
  );
}

export default App;
