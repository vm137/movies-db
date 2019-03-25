import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard';
import './style.scss';

const SearchResults = ({ movies, handleClick }) => (
  <div className="results-wrapper">
    {(movies).map(movie => (
      <MovieCard mv={movie} onClick={handleClick} key={movie.id} />
    ))}
  </div>
);

SearchResults.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SearchResults;
