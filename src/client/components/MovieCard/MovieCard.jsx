import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.scss';

const MovieCard = ({ mv }) => (
  <div className="movie-card-wrapper">
    <div className="img-container">
      <img src={mv.poster_path} alt={mv.title} />
    </div>
    <div className="info-wrapper">
      <p className="movie-title">{mv.title}</p>
      <p className="movie-genres">{mv.genres.join(' & ')}</p>
      <p className="movie-year">{(mv.release_date).substring(0, 4)}</p>
    </div>
  </div>
);

MovieCard.propTypes = {
  mv: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MovieCard;
