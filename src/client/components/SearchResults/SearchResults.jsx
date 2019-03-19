import React from 'react';
import PropTypes from 'prop-types';
import './SearchResults.scss';

const SearchResults = ({ foundMovies, movies }) => (
  <div className="results-wrapper">
    <h2>search results</h2>
    <div>
found:
      {foundMovies}
      {' '}
(showing max 10)
    </div>
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
  foundMovies: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchResults;
