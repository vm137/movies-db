import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './style.scss';
import { fetchSingleMovieAction } from '../../actions/actions';

class MovieCard extends PureComponent {
  static propTypes = {
    mv: PropTypes.objectOf(PropTypes.any).isRequired,
    fetchSingleMovie: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { fetchSingleMovie, mv } = this.props;
    fetchSingleMovie(mv.id);
  }

  render() {
    const { mv } = this.props;

    return (
      <div onClick={this.handleClick} role="button" tabIndex={0} onKeyPress={() => {}} className="movie-card-wrapper">
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

const mapDispatchProps = dispatch => ({
  fetchSingleMovie: id => dispatch(fetchSingleMovieAction(id)),
});

export default connect(null, mapDispatchProps)(MovieCard);
