import { shallow, mount, render } from 'enzyme';
import React from 'react';
import SearchBlock from './SearchBlock';

const movies = {};
const numberFoundMovies = 10;
const searchCB = () => {};
const onClick = () => {};

describe('SearchBlock', () => {
  it('renders matching snapshot', () => {
    const wrapper = render(<SearchBlock
      movies={movies}
      numberFoundMovies={numberFoundMovies}
      searchCB={searchCB}
      onClick={onClick}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('mount two', () => {
    const wrapper = mount(<SearchBlock
      movies={movies}
      numberFoundMovies={numberFoundMovies}
      searchCB={searchCB}
      onClick={onClick}
    />);
    expect(wrapper.find('.search-block-wrapper').length).toBe(1);
  });
});
