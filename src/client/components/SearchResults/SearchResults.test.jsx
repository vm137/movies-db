import { shallow, render } from 'enzyme/build';
import React from 'react';
import testMovies from './__fixtures__/movies.json';
import SearchResults from './SearchResults';

const onClick = jest.fn();

describe('<SearchResults />', () => {
  it('renders matching snapshot', () => {
    const wrapper = shallow(<SearchResults
      movies={testMovies}
      onClick={onClick}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('check for .movie-card-wrapper', () => {
    const wrapper = render(<SearchResults
      movies={testMovies}
      onClick={onClick}
    />);
    expect(wrapper.find('.movie-card-wrapper').length).toBe(2);
  });
});
