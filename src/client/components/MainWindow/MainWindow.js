import React, {Component} from 'react';
import SearchBlock from '../SearchBlock/SearchBlock';
import SingleMovie from '../SingleMovie/SingleMovie';

import './MainWindow.scss';
import fakeData from "../constants/fakeData";

export default class MainWindow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchBlock: true
        };
    }

    componentWillMount() {
        this.makeFetch();
    }

    makeFetch() {
        /* eslint-disable no-undef */
        fetch("http://react-cdp-api.herokuapp.com/movies")
            .then(function (response) {
                return response.json();
            })
            .then(myJson => {
                    // console.log(myJson);
                    this.state.movies = myJson;
                    console.log(this.state.movies);
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
            { this.state.searchBlock ? <SearchBlock /> : <SingleMovie /> }
          </div>
        );
    }
}
