import React, {Component} from 'react';
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
            movies: []
        };
    }

    makeFetch(searchString = '', searchBy = '', offset = '', limit = '') {
        let callString = 'http://react-cdp-api.herokuapp.com/movies';
        callString += `?search=${searchString}&searchBy=${searchBy}&offset=${offset}&limit=${limit}`;

        /* eslint-disable no-undef */
        fetch(callString)
            .then(function (response) {
                return response.json();
            })
            .then(myJson => {
                this.setState({
                    movies: myJson.data,
                    foundMovies: myJson.total
                })
            }
            )
        //     .catch(
        //     (error) => {
        //         console.log("=== fetch unsuccessful.");
        //         console.log(error);
        //
        //         this.state.movies = fakeData;
        //     }
        // );
    }

    render() {
        return (
          <div>
            { this.state.searchBlock ?
              <SearchBlock movies={this.state.movies} foundMovies={this.state.foundMovies} searchCB={this.makeFetch} /> :
              <SingleMovie movie="single movie 1" movies={this.state.movies} />
            }
          </div>
        );
    }
}
