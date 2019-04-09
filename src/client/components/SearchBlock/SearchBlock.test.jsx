import { mount } from 'enzyme';
import React from 'react';
import SearchBlock from './SearchBlock';

const movies = [];
const numberFoundMovies = 10;
const searchCB = () => {};
const onClick = () => {};

describe('<SearchBlock />', () => {
  it('renders matching snapshot', () => {
    const wrapper = mount(<SearchBlock
      movies={movies}
      numberFoundMovies={numberFoundMovies}
      searchCB={searchCB}
      onClick={onClick}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('check for .search-block-wrapper', () => {
    const wrapper = mount(<SearchBlock
      movies={movies}
      numberFoundMovies={numberFoundMovies}
      searchCB={searchCB}
      onClick={onClick}
    />);
    expect(wrapper.find('.search-block-wrapper').length).toBe(1);
  });

  it('check for state change after click SortBy', () => {
    const wrapper = mount(<SearchBlock
      movies={movies}
      numberFoundMovies={numberFoundMovies}
      searchCB={searchCB}
      onClick={onClick}
    />);

    const button = wrapper.find('.sort-release-date');
    expect(button.length).toBe(1);

    let status = wrapper.state().sortByRelease;
    expect(status).toEqual(true);
    button.simulate('click');
    status = wrapper.state().sortByRelease;
    expect(status).toEqual(false);
  });

  it('check for searchCB (callback)', () => {
    const onClickJest = jest.fn();
    const wrapper = mount(<SearchBlock
      movies={movies}
      numberFoundMovies={numberFoundMovies}
      searchCB={onClickJest}
      onClick={onClick}
    />);

    const button = wrapper.find('.btn-search');
    expect(button.length).toBe(1);
    button.simulate('click');
    expect(onClickJest.mock.calls.length).toEqual(1);
  });
});
