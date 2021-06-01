import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    return (
      <>
        <h1>Calculator</h1>
        <Display result={calculate.total} />
        <ButtonPanel />
      </>
    );
  }
}

export default App;
