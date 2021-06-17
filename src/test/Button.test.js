import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../components/Button';

it('return button panel', () => {
  const clickHandle = () => {};
  const tree = renderer
    .create(<Button buttonName="AC" clickPanel={clickHandle} color="gray" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
