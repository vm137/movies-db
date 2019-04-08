import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard';
import './style.scss';

const SearchResults = ({ moviesR }) => (
  <div className="results-wrapper">
    {(moviesR).map(movie => (
      <MovieCard mv={movie} key={movie.id} />
    ))}
  </div>
);

SearchResults.propTypes = {
  moviesR: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  moviesR: state.movies,
});

export default connect(mapStateToProps)(SearchResults);
