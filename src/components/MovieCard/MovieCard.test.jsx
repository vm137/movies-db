import { shallow } from 'enzyme';
import React from 'react';
import testData from './__fixtures__/testMovie.json';
import MovieCard from './MovieCard';

describe('<MovieCard />', () => {
  const historyPush = jest.fn();
  const history = {
    push: historyPush,
  };

  it('renders matching snapshot', () => {
    const wrapper = shallow(<MovieCard movie={testData} history={history} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('find .movie-title class', () => {
    const wrapper = shallow(<MovieCard movie={testData} history={history} />);
    expect(wrapper.find('.movie-title').length).toBe(1);
  });

  it('find genre from array of genres', () => {
    const wrapper = shallow(<MovieCard movie={testData} history={history} />);
    expect(wrapper.find('.movie-genres').text()).toBe('Western');
  });

  it('check handleClick() method', () => {
    const wrapper = shallow(<MovieCard movie={testData} history={history} />);
    const divWrapper = wrapper.find('.movie-card-wrapper');
    expect(divWrapper.length).toBe(1);
    divWrapper.simulate('click');
    expect(historyPush.mock.calls.length).toEqual(1);
  });
});
