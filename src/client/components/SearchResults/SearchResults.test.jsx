import { render } from 'enzyme/build';
import React from 'react';
import SearchResults from './SearchResults';

const movies = [];
const onClick = jest.fn();

describe('<SearchResults />', () => {
  it('renders matching snapshot', () => {
    const wrapper = render(<SearchResults
      movies={movies}
      onClick={onClick}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
