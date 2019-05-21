// @flow

import React, { PureComponent } from 'react';
import type { Movie } from '../../types';
import './style.scss';

type DefaultProps = {| history: {} |};
type Props = {
  ...DefaultProps,
  movie: Movie,
  history: Object
};

export default class MovieCard extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    (this: Object).handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { movie, history } = this.props;
    history.push(`/film/${movie.id}`);
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
