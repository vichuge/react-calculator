import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

it('return display', () => {
  const tree = renderer
    .create(<Home />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
