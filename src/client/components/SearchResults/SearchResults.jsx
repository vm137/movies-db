import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard';
import './style.scss';

const SearchResults = ({ movies, onClick }) => (
  <div className="results-wrapper">
    {(movies).map(movie => (
      <MovieCard mv={movie} onClick={onClick} key={movie.id} />
    ))}
  </div>
);

SearchResults.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SearchResults;
