import { mount } from 'enzyme';
import React from 'react';
import SearchBlock from './SearchBlock';

jest.mock('../SearchResults', () => () => 'SearchResults');

const fetchMovies = jest.fn();
const movies = [];
const swapSearchBy = jest.fn();
const swapSortBy = jest.fn();
const totalR = 10;
const searchBy = true;
const sortBy = true;
const match = { params: { query: '' } };

describe('<SearchBlock />', () => {
  it('renders matching snapshot', () => {
    const wrapper = mount(<SearchBlock
      fetchMovies={fetchMovies}
      movies={movies}
      totalR={totalR}
      swapSearchBy={swapSearchBy}
      swapSortBy={swapSortBy}
      searchBy={searchBy}
      sortBy={sortBy}
      match={match}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('check for .search-block-wrapper', () => {
    const wrapper = mount(<SearchBlock
      fetchMovies={fetchMovies}
      movies={movies}
      totalR={totalR}
      swapSearchBy={swapSearchBy}
      swapSortBy={swapSortBy}
      searchBy={searchBy}
      sortBy={sortBy}
      match={match}
    />);
    expect(wrapper.find('.search-block-wrapper').length).toBe(1);
  });
});
