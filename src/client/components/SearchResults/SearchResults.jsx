import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import './SearchResults.scss';

const SearchResults = ({ movies }) => (
  <div className="results-wrapper">
    {(movies).map(movie => (
      <MovieCard mv={movie} key={movie.id} />
    ))}
  </div>
);

SearchResults.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchResults;
