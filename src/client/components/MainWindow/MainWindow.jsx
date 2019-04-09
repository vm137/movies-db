import React, { Component } from 'react';
import SearchBlock from '../SearchBlock';
import SingleMovie from '../SingleMovie';
import './style.scss';

export default class MainWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBlock: true,
      movieId: null,
      numberFoundMovies: 0,
      movies: [],
    };
    this.makeFetch = this.makeFetch.bind(this);
    this.handleToSingleView = this.handleToSingleView.bind(this);
    this.handleToSearchView = this.handleToSearchView.bind(this);
  }

  makeFetch(searchString = '', searchBy = '', offset = '', limit = '') {
    let callString = 'http://react-cdp-api.herokuapp.com/movies';
    callString += `?search=${searchString}&searchBy=${searchBy}&offset=${offset}&limit=${limit}`;

    fetch(callString)
      .then(response => response.json())
      .then((myJson) => {
        this.setState({
          movies: myJson.data,
          numberFoundMovies: myJson.total,
        });
      });
  }

  handleToSingleView(id) {
    this.setState({
      searchBlock: false,
      movieId: id,
    });
  }

  handleToSearchView() {
    this.setState({
      searchBlock: true,
    });
  }

  render() {
    const {
      searchBlock, movies, numberFoundMovies = 0, movieId,
    } = this.state;

    return (
      <div className="mainWindow">
        { searchBlock
          ? (
            <SearchBlock
              movies={movies}
              numberFoundMovies={numberFoundMovies}
              searchCB={this.makeFetch}
              onClick={this.handleToSingleView}
            />
          )
          : (
            <SingleMovie
              movieId={movieId}
              movies={movies}
              onClick={this.handleToSearchView}
            />
          )
            }
      </div>
    );
  }
}
