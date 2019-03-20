import React, { Component } from 'react';
import SearchBlock from '../SearchBlock/SearchBlock';
import SingleMovie from '../SingleMovie/SingleMovie';
import './MainWindow.scss';


export default class MainWindow extends Component {
  constructor(props) {
    super(props);
    this.makeFetch = this.makeFetch.bind(this);
    this.state = {
      searchBlock: true,
      foundMovies: 0,
      movies: [],
    };
  }

  makeFetch(searchString = '', searchBy = '', offset = '', limit = '') {
    let callString = 'http://react-cdp-api.herokuapp.com/movies';
    callString += `?search=${searchString}&searchBy=${searchBy}&offset=${offset}&limit=${limit}`;

    fetch(callString)
      .then(response => response.json())
      .then((myJson) => {
        this.setState({
          movies: myJson.data,
          foundMovies: myJson.total,
        });
      });
    // .catch((error) => {
    // console.log('=== fetch unsuccessful.');
    // console.log(error);
    // });
  }

  render() {
    const { searchBlock, foundMovies, movies } = this.state;
    return (
      <div>
        { searchBlock
          ? <SearchBlock movies={movies} foundMovies={foundMovies || 0} searchCB={this.makeFetch} />
          : <SingleMovie movie="single movie 1" movies={movies} />
            }
      </div>
    );
  }
}
