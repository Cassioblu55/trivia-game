import React from 'react';
import { shallow } from 'enzyme';
import PlayerSelect from './PlayerSelect';

describe('PlayerSelect', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<PlayerSelect />);
    expect(wrapper).toMatchSnapshot();
  });
});
