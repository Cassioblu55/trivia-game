import React from 'react';
import { shallow } from 'enzyme';
import Winner from './Winner';

describe('Winner', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Winner />);
    expect(wrapper).toMatchSnapshot();
  });
});
