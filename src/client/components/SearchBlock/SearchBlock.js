import React, {Component} from 'react';
import SearchResults from '../SearchResults/SearchResults';
import enterArrow from '../../img/enter-arrow.svg';
import './SearchBlock.scss';
import fakeData from '../constants/fakeData';

export default class SearchBlock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            titleButtonSelected: true
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
            ).catch(
            () => {
                console.log("=== fetch unsuccessful.");
                this.state.movies = fakeData;
            }
        );
    }

    changeButtonsColor() {
        this.setState({titleButtonSelected: !this.state.titleButtonSelected});
    }

    render() {
        console.log(this.state.movies);
        return (
          <div className="search-block-wrapper">
            <div className="search-box-wrapper">
              <div className="search-block">
                <p className="find-title">find your movie</p>

                <div className="input-wrapper">
                  <input className="search-input" type="text" />
                  <img className="img-arrow" src={enterArrow} alt="enter" />
                </div>

                <div className="search-buttons">
                  <span className="search-by">search by</span>
                  <button
                    className={`btns-search btn-title ${this.state.titleButtonSelected ? "btn-bg-red" : "btn-bg-grey"}`}
                    onClick={this.changeButtonsColor.bind(this)}
                    type="button">title
                  </button>
                  <button
                    className={`btns-search btn-genre ${!this.state.titleButtonSelected ? "btn-bg-red" : "btn-bg-grey"}`}
                    onClick={this.changeButtonsColor.bind(this)}
                    type="button">genre
                  </button>

                  <button className="btns-search btn-search" type="submit">search</button>
                </div>
              </div>
            </div>

            <SearchResults data="data movies data" />
          </div>
        )
    }

}
