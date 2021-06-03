import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickApp }) => {
  const clickHandle = (buttonName) => {
    clickApp(buttonName);
  };
  return (
    <>
      <div className="g1">
        <Button buttonName="AC" clickPanel={clickHandle} />
        <Button buttonName="+/-" clickPanel={clickHandle} />
        <Button buttonName="%" clickPanel={clickHandle} />
        <Button buttonName="/" clickPanel={clickHandle} />
      </div>
      <div className="g2">
        <Button buttonName="7" clickPanel={clickHandle} />
        <Button buttonName="8" clickPanel={clickHandle} />
        <Button buttonName="9" clickPanel={clickHandle} />
        <Button buttonName="X" clickPanel={clickHandle} />
      </div>
      <div className="g3">
        <Button buttonName="4" clickPanel={clickHandle} />
        <Button buttonName="5" clickPanel={clickHandle} />
        <Button buttonName="6" clickPanel={clickHandle} />
        <Button buttonName="-" clickPanel={clickHandle} />
      </div>
      <div className="g4">
        <Button buttonName="1" clickPanel={clickHandle} />
        <Button buttonName="2" clickPanel={clickHandle} />
        <Button buttonName="3" clickPanel={clickHandle} />
        <Button buttonName="+" clickPanel={clickHandle} />
      </div>
      <div className="g5">
        <Button buttonName="0" clickPanel={clickHandle} />
        <Button buttonName="." clickPanel={clickHandle} />
        <Button buttonName="=" clickPanel={clickHandle} />
      </div>
    </>
  );
};

ButtonPanel.propTypes = {
  clickApp: PropTypes.func.isRequired,
};

export default ButtonPanel;
