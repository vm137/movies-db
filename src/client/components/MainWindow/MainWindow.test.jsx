import { shallow } from 'enzyme';
import React from 'react';
import MainWindow from './MainWindow';

describe('<MainWindow />', () => {
  it('renders matching snapshot', () => {
    const wrapper = shallow(<MainWindow />);
    expect(wrapper).toMatchSnapshot();
  });

  it('render two', () => {
    const wrapper = shallow(<MainWindow />);
    expect(wrapper.find('.mainWindow').length).toBe(1);
  });
});
