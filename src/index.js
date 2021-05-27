import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function Greeting({ name }) {
  return (
    <h1>
      {' '}
      Hello,
      {name}
    </h1>
  );
}

Greeting.defaultProps = {
  name: 'Defatult',
};

Greeting.propTypes = {
  name: PropTypes.string,
};

ReactDOM.render(
  <Greeting name="Victor" />,
  document.getElementById('root'),
);
