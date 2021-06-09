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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const result = calculate(this.state, buttonName);
    this.setState({ ...result });
  }

  render() {
    const { total, operation, next } = this.state;
    let display = '';
    if (!total) display = '0';
    if (total) display = total;
    if (total && operation) display = total;
    if (total && operation && next) display = next;
    return (
      <>
        <Display result={display} />
        <ButtonPanel clickApp={this.handleClick} />
      </>
    );
  }
}

export default App;
