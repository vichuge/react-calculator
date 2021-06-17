import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  buttonName, clickPanel, color,
}) => {
  const clickBtn = () => clickPanel(buttonName);
  return (
    <button type="button" className={`${color}`} onClick={clickBtn}>{buttonName}</button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  clickPanel: PropTypes.func.isRequired,
  color: PropTypes.string,
};

Button.defaultProps = {
  color: 'orange',
};

export default Button;
