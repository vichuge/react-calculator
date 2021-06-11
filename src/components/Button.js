import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  buttonName, clickPanel, color, wide,
}) => {
  let w = '';
  if (wide === true) w = 'zero';
  const clickBtn = () => clickPanel(buttonName);
  return (
    <button type="button" className={`${color} ${w}`} onClick={clickBtn}>{buttonName}</button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  clickPanel: PropTypes.func.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
