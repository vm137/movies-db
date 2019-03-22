import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import './SearchResults.scss';

const SearchResults = ({ movies, cardClickCB }) => (
  <div className="results-wrapper">
    {(movies).map(movie => (
      <MovieCard mv={movie} cardClickCB={cardClickCB} key={movie.id} />
    ))}
  </div>
);

SearchResults.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  cardClickCB: PropTypes.func.isRequired,
};

export default SearchResults;
