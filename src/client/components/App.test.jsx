import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('<App />', () => {
  it('renders matching snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('has .wrapper class', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.wrapper').length).toBe(1);
  });

  it('renders matching wrapper', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.push').length).toBe(1);
  });
});
