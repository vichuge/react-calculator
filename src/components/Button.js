import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonName, clickPanel }) => {
  const clickBtn = () => clickPanel(buttonName);
  return (
    <button type="button" onClick={clickBtn}>{buttonName}</button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  clickPanel: PropTypes.func.isRequired,
};

export default Button;
