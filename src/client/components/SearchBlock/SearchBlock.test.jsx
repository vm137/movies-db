import { mount } from 'enzyme';
import React from 'react';
import SearchBlock from './SearchBlock';

const moviesTotalR = 10;
const fetchMovies = () => {};

describe('<SearchBlock />', () => {
  it.skip('renders matching snapshot', () => {
    const wrapper = mount(<SearchBlock
      moviesTotalR={moviesTotalR}
      fetchMovies={fetchMovies}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('check for .search-block-wrapper', () => {
    const wrapper = mount(<SearchBlock
      moviesTotalR={moviesTotalR}
      fetchMovies={fetchMovies}
    />);
    expect(wrapper.find('.search-block-wrapper').length).toBe(1);
  });

  it.skip('check for state change after click SortBy', () => {
    const wrapper = mount(<SearchBlock
      moviesTotalR={moviesTotalR}
      fetchMovies={fetchMovies}
    />);

    const button = wrapper.find('.sort-release-date');
    expect(button.length).toBe(1);

    let status = wrapper.state().sortByRelease;
    expect(status).toEqual(true);
    button.simulate('click');
    status = wrapper.state().sortByRelease;
    expect(status).toEqual(false);
  });
});
