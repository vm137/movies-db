// @flow

import React, { PureComponent } from 'react';
import Logo from '../Logo';
import './style.scss';

type DefaultProps = {| history: {}, match: { params: {id: ''} } |};
type Props = {
  ...DefaultProps,
  movieR: Object,
  fetchSingleMovie: Function,
  eraseSingleMovieAction: Function,
  history: Object,
  match: Object,
};

export default class SingleMovie extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    (this: Object).handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { fetchSingleMovie, match } = this.props;
    const movieId = match.params.id;
    fetchSingleMovie(movieId);
  }

  handleClick() {
    const { history, eraseSingleMovieAction } = this.props;
    eraseSingleMovieAction();
    history.push('/search');
  }

  render() {
    const { movieR } = this.props;

    return (
      <div className="single-movie-wrapper">
        <Logo />
        <img src={movieR.poster_path} alt={movieR.title} />
        <button className="btn-search" type="button" onClick={this.handleClick}>back</button>

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
