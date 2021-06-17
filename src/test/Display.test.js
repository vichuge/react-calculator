import React from 'react';
import renderer from 'react-test-renderer';
import Display from '../components/Display';

it('return display', () => {
  const tree = renderer
    .create(<Display result="0123" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
