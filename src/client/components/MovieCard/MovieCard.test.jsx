import { shallow, render } from 'enzyme';
import React from 'react';
import testData from './__testdata__/testMovie.json';
import MovieCard from './MovieCard';

describe('<MovieCard />', () => {
  const onClick = () => {};

  it('renders matching snapshot', () => {
    const wrapper = shallow(<MovieCard mv={testData} onClick={onClick} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('find .movie-title class', () => {
    const wrapper = shallow(<MovieCard mv={testData} onClick={onClick} />);
    expect(wrapper.find('.movie-title').length).toBe(1);
  });

  it('find genre from array of genres', () => {
    const wrapper = shallow(<MovieCard mv={testData} onClick={onClick} />);
    expect(wrapper.find('.movie-genres').text()).toBe('Western');
  });

  it('check handleClick() method', () => {
    const onClickJest = jest.fn();
    const wrapper = shallow(<MovieCard mv={testData} onClick={onClickJest} />);
    const divWrapper = wrapper.find('.movie-card-wrapper');
    expect(divWrapper.length).toBe(1);
    divWrapper.simulate('click');
    expect(onClickJest.mock.calls.length).toEqual(1);
  });
});
