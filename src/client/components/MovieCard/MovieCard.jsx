import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.scss';

class MovieCard extends React.PureComponent {
  handleClick() {
    const { mv, cardClickCB } = this.props;
    cardClickCB(mv.id);
  }

  render() {
    const { mv } = this.props;

    return (
      <div onClick={this.handleClick.bind(this)} role="button" tabIndex={0} onKeyPress={() => {}} className="movie-card-wrapper">
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
  }
}

MovieCard.propTypes = {
  mv: PropTypes.objectOf(PropTypes.any).isRequired,
  cardClickCB: PropTypes.func.isRequired,
};

export default MovieCard;
