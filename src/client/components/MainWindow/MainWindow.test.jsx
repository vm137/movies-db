import { shallow } from 'enzyme';
import React from 'react';
import MainWindow from './MainWindow';
import SearchBlock from '../SearchBlock';
import SingleMovie from '../SingleMovie';

describe('<MainWindow />', () => {
  it('renders matching snapshot', () => {
    const wrapper = shallow(<MainWindow showPage="searchBlock" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('render with <SearchBlock />', () => {
    const wrapper = shallow(<MainWindow showPage="searchBlock" />);
    expect(wrapper.find(SearchBlock)).toHaveLength(1);
  });

  it('render with <SingleMovie />', () => {
    const wrapper = shallow(<MainWindow showPage="singleMovie" />);
    expect(wrapper.find(SingleMovie)).toHaveLength(1);
  });
});
