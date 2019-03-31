import { shallow, render } from 'enzyme';
import React from 'react';
import App from './App';

describe('MovieCard', () => {
  it('renders matching snapshot', () => {
    const wrapper = render(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders matching wrapper', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.wrapper').length).toBe(1);
  });

  it('renders matching wrapper', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.push').length).toBe(1);
  });
});
