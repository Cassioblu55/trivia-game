import React from 'react';
import { shallow } from 'enzyme';
import Scoring from './Scoring';

describe('Scoring', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Scoring />);
    expect(wrapper).toMatchSnapshot();
  });
});
