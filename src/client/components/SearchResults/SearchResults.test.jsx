import { shallow } from 'enzyme/build';
import React from 'react';
import testMovies from './__fixtures__/movies.json';
import SearchResults from './SearchResults';

describe('<SearchResults />', () => {
  it('renders matching snapshot', () => {
    const wrapper = shallow(<SearchResults
      moviesR={testMovies}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
