import React from 'react';
import { shallow } from 'enzyme';
import Players from './Players';

describe('Players', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Players />);
    expect(wrapper).toMatchSnapshot();
  });
});
