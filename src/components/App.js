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
    // const { next, total } = this.state;
    return (
      <>
        <Display result="0" />
        <ButtonPanel clickApp={this.handleClick} />
      </>
    );
  }
}

export default App;
