import React from 'react';
import { shallow } from 'enzyme';
import CategorySelect from './CategorySelect';

describe('CategorySelect', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CategorySelect />);
    expect(wrapper).toMatchSnapshot();
  });
});
