import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import './style.scss';

export default class SingleMovie extends PureComponent {
  static propTypes = {
    movieId: PropTypes.number.isRequired,
    changeToSearchCB: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      movie: {},
    };
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

  handleSearchButton() {
    const { changeToSearchCB } = this.props;
    changeToSearchCB.call();
  }

  render() {
    const { movie } = this.state;

    return (
      <div className="single-movie-wrapper">
        <Logo />
        <img src={movie.poster_path} alt={movie.title} />
        <button className="btn-search" type="button" onClick={this.handleSearchButton.bind(this)}>search</button>

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

        {/* <SearchResults movies={this.props.movies} /> */}
      </div>
    );
  }
}
