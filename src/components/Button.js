import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { buttonName, type } = props;

  return (
    <button type="button" className={type}>{buttonName}</button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  buttonName: 'bName',
  type: 'dType',
};

export default Button;
