// @flow

import React from 'react';
import MovieCard from '../MovieCard';
import './style.scss';

type Props = {
  moviesR: Object
}

const SearchResults = ({ moviesR }: Props) => (
  <div className="results-wrapper">
    {(moviesR).map(movie => (
      <MovieCard movie={movie} key={movie.id} />
    ))}
  </div>
);

export default SearchResults;
