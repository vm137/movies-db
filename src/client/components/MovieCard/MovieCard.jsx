import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class MovieCard extends PureComponent {
  static propTypes = {
    movie: PropTypes.objectOf(PropTypes.any).isRequired,
    fetchSingleMovie: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { fetchSingleMovie, movie } = this.props;
    fetchSingleMovie(movie.id);
  }

  render() {
    const { movie } = this.props;

    return (
      <div onClick={this.handleClick} role="button" tabIndex={0} onKeyPress={() => {}} className="movie-card-wrapper">
        <div className="img-container">
          <img src={movie.poster_path} alt={movie.title} />
        </div>
        <div className="info-wrapper">
          <p className="movie-title">{movie.title}</p>
          <p className="movie-genres">{movie.genres.join(' & ')}</p>
          <p className="movie-year">{(movie.release_date).substring(0, 4)}</p>
        </div>
      </div>
    );
  }
}
