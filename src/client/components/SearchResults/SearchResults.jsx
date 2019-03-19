import React from 'react';
import './SearchResults.scss';

const SearchResults = props => (
  <div className="results-wrapper">
    <h2>search results</h2>
    <div>
found:
      {props.foundMovies}
      {' '}
(showing max 10)
    </div>
    <ul>
      {(props.movies).map(movie => (
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

export default SearchResults;
