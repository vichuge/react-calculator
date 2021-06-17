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
        <Button buttonName="AC" clickPanel={clickHandle} color="gray" />
        <Button buttonName="+/-" clickPanel={clickHandle} color="gray" />
        <Button buttonName="%" clickPanel={clickHandle} color="gray" />
        <Button buttonName="/" clickPanel={clickHandle} />
      </div>
      <div className="g1">
        <Button buttonName="7" clickPanel={clickHandle} color="gray" />
        <Button buttonName="8" clickPanel={clickHandle} color="gray" />
        <Button buttonName="9" clickPanel={clickHandle} color="gray" />
        <Button buttonName="X" clickPanel={clickHandle} />
      </div>
      <div className="g1">
        <Button buttonName="4" clickPanel={clickHandle} color="gray" />
        <Button buttonName="5" clickPanel={clickHandle} color="gray" />
        <Button buttonName="6" clickPanel={clickHandle} color="gray" />
        <Button buttonName="-" clickPanel={clickHandle} />
      </div>
      <div className="g1">
        <Button buttonName="1" clickPanel={clickHandle} color="gray" />
        <Button buttonName="2" clickPanel={clickHandle} color="gray" />
        <Button buttonName="3" clickPanel={clickHandle} color="gray" />
        <Button buttonName="+" clickPanel={clickHandle} />
      </div>
      <div className="g1">
        <Button buttonName="0" clickPanel={clickHandle} color="zero" />
        <Button buttonName="." clickPanel={clickHandle} color="gray" />
        <Button buttonName="=" clickPanel={clickHandle} />
      </div>
    </>
  );
};

ButtonPanel.propTypes = {
  clickApp: PropTypes.func.isRequired,
};

export default ButtonPanel;
