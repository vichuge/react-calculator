import React from 'react';
import renderer from 'react-test-renderer';
import Calc from '../components/Calc';

it('return display', () => {
  const tree = renderer
    .create(<Calc />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
