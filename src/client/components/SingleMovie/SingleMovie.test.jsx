import { render } from 'enzyme';
import React from 'react';
import SingleMovie from './SingleMovie';

const movieId = 10;
const onClick = () => {};

describe('SingleMovie', () => {
  it('renders matching snapshot', () => {
    const wrapper = render(<SingleMovie
      movieId={movieId}
      onClick={onClick}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  // it('mount two', () => {
  //   const wrapper = mount(<SingleMovie
  //     movieId={movieId}
  //     onClick={onClick}
  //   />);
  //   expect(wrapper.find('.single-movie-wrapper').length).toBe(1);
  // });
});
