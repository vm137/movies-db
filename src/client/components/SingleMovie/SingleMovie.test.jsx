import { shallow, render } from 'enzyme';
import React from 'react';
import SingleMovie from './SingleMovie';

const movieId = 336;
const onClick = () => {};

describe('<SingleMovie />', () => {
  it('renders matching snapshot', () => {
    const wrapper = render(<SingleMovie
      movieId={movieId}
      onClick={onClick}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('test fetch(url)', (done) => {
    global.fetch = jest.fn();
    const mockSuccessResponse = { movie: {} };
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    const wrapper = shallow(<SingleMovie
      movieId={movieId}
      onClick={onClick}
    />);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('http://react-cdp-api.herokuapp.com/movies/336');

    process.nextTick(() => {
      expect(wrapper.find('.single-movie-wrapper').length).toBe(1);

      global.fetch.mockClear();
      done();
    });
  });
});
