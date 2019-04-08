import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { showSearchBlockAction } from '../../actions/actions';
import Logo from '../Logo';
import './style.scss';

class SingleMovie extends PureComponent {
  static propTypes = {
    movieR: PropTypes.objectOf(PropTypes.any).isRequired,
    showSearchBlock: PropTypes.func.isRequired,
  };

  render() {
    const { movieR, showSearchBlock } = this.props;

    return (
      <div className="single-movie-wrapper">
        <Logo />
        <img src={movieR.poster_path} alt={movieR.title} />
        <button className="btn-search" type="button" onClick={showSearchBlock}>search</button>

        <div className="movie-details">
          <h2 className="title">{movieR.title}</h2>
          <p className="tagline">{movieR.tagline}</p>
          <div className="release-wrapper">
            <p className="release-date">{movieR.release_date && (movieR.release_date).substr(0, 4)}</p>
            <p className="runtime">
              {movieR.runtime}
&nbsp;min
            </p>
          </div>
          <p className="overview">{movieR.overview}</p>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  movieR: state.movie,
});

const mapDispatchProps = dispatch => ({
  showSearchBlock: () => dispatch(showSearchBlockAction([])),
});

export default connect(mapStateToProps, mapDispatchProps)(SingleMovie);
