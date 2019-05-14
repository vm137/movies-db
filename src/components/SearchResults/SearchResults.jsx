import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard';
import './style.scss';

const SearchResults = ({ moviesR }) => (
  <div className="results-wrapper">
    {(moviesR).map(movie => (
      <MovieCard movie={movie} key={movie.id} />
    ))}
  </div>
);

SearchResults.propTypes = {
  moviesR: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchResults;
