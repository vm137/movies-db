import { render, shallow } from 'enzyme';
import React from 'react';
import Logo from './Logo';

describe('Logo', () => {
  it('renders matching snapshot', () => {
    const wrapper = render(<Logo />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Logo. test class="logo"', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper.find('.logo').length).toBe(1);
  });
});
