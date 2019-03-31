import { shallow, render } from 'enzyme';
import React from 'react';

import MovieCard from './MovieCard';

const onClick = () => {};
const mv = {
  id: 336, title: 'Duck, You Sucker', tagline: 'Rod Steiger and James Coburn will blow you apart in', vote_average: 7.7, vote_count: 250, release_date: '1971-10-20', poster_path: 'https://image.tmdb.org/t/p/w500/nQkr1yi87pX1d3lQVTrBEWlCpT1.jpg', overview: 'At the beginning of the 1913 Mexican Revolution, greedy bandit Juan Miranda and idealist John H. Mallory, an Irish Republican Army explosives expert on the lam from the British, fall in with a band of revolutionaries plotting to strike a national bank. When it turns out that the government has been using the bank as a hiding place for illegally detained political prisoners -- who are freed by the blast -- Miranda becomes a revolutionary hero against his will.', budget: 0, revenue: 0, genres: ['Western'], runtime: 157,
};

describe('MovieCard', () => {
  it('renders matching snapshot', () => {
    const wrapper = render(<MovieCard mv={mv} onClick={onClick} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('render two', () => {
    const wrapper = shallow(<MovieCard mv={mv} onClick={onClick} />);
    expect(wrapper.find('.movie-title').length).toBe(1);
  });

  it('render three', () => {
    const wrapper = shallow(<MovieCard mv={mv} onClick={onClick} />);
    expect(wrapper.find('.movie-genres').text()).toBe('Western');
  });

  it('render four', () => {
    const wrapper = shallow(<MovieCard mv={mv} onClick={onClick} />);
    expect(wrapper.find('p.movie-year').length).toBe(1);
  });
});
