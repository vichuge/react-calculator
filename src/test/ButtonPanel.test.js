import React from 'react';
import renderer from 'react-test-renderer';
import ButtonPanel from '../components/ButtonPanel';

it('return button panel', () => {
  const handleClick = () => {};
  const tree = renderer
    .create(<ButtonPanel clickApp={handleClick} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
