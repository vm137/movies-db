import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard';
import './style.scss';

const SearchResults = ({ movies, handleCardClick }) => (
  <div className="results-wrapper">
    {(movies).map(movie => (
      <MovieCard mv={movie} handleCardClick={handleCardClick} key={movie.id} />
    ))}
  </div>
);

SearchResults.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleCardClick: PropTypes.func.isRequired,
};

export default SearchResults;
