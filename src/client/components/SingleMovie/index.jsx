import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class SingleMovie extends Component {
  static propTypes = {
    movieId: PropTypes.number.isRequired,
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

  render() {
    const { movie } = this.state;

    return (
      <div>
        <p>{movie.title}</p>
        <p>{movie.tagline}</p>
        <p>{movie.release_date}</p>
        <p>{movie.runtime}</p>
        <p>
budget:
          {movie.budget}
        </p>
        <p>{movie.overview}</p>

        <img src={movie.poster_path} alt={movie.title} />

        {/* <SearchResults movies={this.props.movies} /> */}

      </div>
    );
  }
}
