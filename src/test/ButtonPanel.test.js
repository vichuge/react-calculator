import React from 'react';
import renderer from 'react-test-renderer';
import ButtonPanel from '../components/ButtonPanel';

it('return button panel', () => {
  const handleClick = (buttonName) => {
    console.log(buttonaName);
  };
  const tree = renderer
    .create(<ButtonPanel clickApp={handleClick} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});