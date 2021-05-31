import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { buttonName } = props;

  return (
    <div>{buttonName}</div>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string,
};

Button.defaultProps = {
  buttonName: 'bName',
};

export default Button;
