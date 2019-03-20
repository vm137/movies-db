import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import './SearchResults.scss';

const SearchResults = ({ movies }) => (
  <div className="results-wrapper">
    <MovieCard />
    <ul>
      {(movies).map(movie => (
        <li key={movie.id}>
          {movie.title}
          {' '}
(
          {movie.genres.join(', ')}
)
        </li>
      ))}
    </ul>
  </div>
);

SearchResults.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchResults;
