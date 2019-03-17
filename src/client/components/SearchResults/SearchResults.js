import React, {Component} from 'react';
import './SearchResults.scss';

export default class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const listMovies = (this.props.movies).map(movie =>
          <li key={movie.id}>{movie.title} ({movie.genres.join(", ")})</li>
        );

        return (
          <div className="results-wrapper">
            <h2>search results</h2>
            <div>found: {this.props.movies.length}</div>
            <ul>{listMovies}</ul>
          </div>
        );
    }
}
