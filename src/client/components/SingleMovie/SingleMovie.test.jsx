import { shallow } from 'enzyme';
import React from 'react';
import SingleMovie from './SingleMovie';
import testData from './__fixtures__/testMovie.json';

const fetchSingleMovie = jest.fn();
const eraseSingleMovieAction = jest.fn();
const historyPush = jest.fn();
const history = {
  push: historyPush,
};
const match = {
  params: {
    id: '',
  },
};

describe('<SingleMovie />', () => {
  it('renders matching snapshot', () => {
    const wrapper = shallow(<SingleMovie
      movieR={testData}
      eraseSingleMovieAction={eraseSingleMovieAction}
      fetchSingleMovie={fetchSingleMovie}
      history={history}
      match={match}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  test('click "back" button', () => {
    const wrapper = shallow(<SingleMovie
      movieR={testData}
      eraseSingleMovieAction={eraseSingleMovieAction}
      fetchSingleMovie={fetchSingleMovie}
      history={history}
      match={match}
    />);

    const button = wrapper.find('.btn-search');
    expect(button.length).toBe(1);
    button.simulate('click');

    expect(historyPush.mock.calls.length).toEqual(1);
  });
});
