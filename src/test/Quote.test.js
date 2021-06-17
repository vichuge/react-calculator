import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

it('return display', () => {
  const tree = renderer
    .create(<Quote />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
