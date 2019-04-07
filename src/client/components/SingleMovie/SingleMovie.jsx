import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import './style.scss';
import { showSearchBlock } from '../../actions/actions';

class SingleMovie extends PureComponent {
  static propTypes = {
    movieId: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      movie: {},
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { movieId } = this.props;
    const callString = `http://react-cdp-api.herokuapp.com/movies/${movieId}`;

    fetch(callString)
      .then(response => response.json())
      .then((myJson) => {
        this.setState({
          movie: myJson,
        });
      });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick();
    this.props.showSearchBlock();
  }

  render() {
    const { movie } = this.state;

    return (
      <div className="single-movie-wrapper">
        <Logo />
        <img src={movie.poster_path} alt={movie.title} />
        <button className="btn-search" type="button" onClick={this.handleClick}>search</button>

        <div className="movie-details">
          <h2 className="title">{movie.title}</h2>
          <p className="tagline">{movie.tagline}</p>
          <div className="release-wrapper">
            <p className="release-date">{movie.release_date && (movie.release_date).substr(0, 4)}</p>
            <p className="runtime">
              {movie.runtime}
&nbsp;min
            </p>
          </div>
          <p className="overview">{movie.overview}</p>
        </div>

      </div>
    );
  }
}

const mapDispatchProps = dispatch => ({
  showSearchBlock: () => dispatch(showSearchBlock),
});

export default connect(null, mapDispatchProps)(SingleMovie);
