// @flow

import React from 'react';
import MovieCard from '../MovieCard';
import type { Movie } from '../../types';
import './style.scss';

type Props = {
  moviesR: Array<Movie>
}

const SearchResults = ({ moviesR }: Props) => (
  <div className="results-wrapper">
    {(moviesR).map(movie => (
      <MovieCard movie={movie} key={movie.id} />
    ))}
  </div>
);

export default SearchResults;
