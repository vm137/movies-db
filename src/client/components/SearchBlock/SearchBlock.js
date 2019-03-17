import React, {Component} from 'react';
import SearchResults from '../SearchResults/SearchResults';
import enterArrow from '../../img/enter-arrow.svg';
import './SearchBlock.scss';
import Header from "../Header/Header";

export default class SearchBlock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstMount: true,
            titleButtonSelected: true
        };
    }

    changeButtonsColor() {
        this.setState(prevState => ({titleButtonSelected: !prevState.titleButtonSelected}));
    }

    makeSearch() {
        this.setState({firstMount: false});


    }

    render() {
        return (
          <div className="search-block-wrapper">
            <div className="search-box-wrapper">
              <Header />
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
                    type="button"
                  >title
                  </button>
                  <button
                    className={`btns-search btn-genre ${!this.state.titleButtonSelected ? "btn-bg-red" : "btn-bg-grey"}`}
                    onClick={this.changeButtonsColor.bind(this)}
                    type="button"
                  >genre
                  </button>

                  <button
                    onClick={this.makeSearch.bind(this)}
                    className="btns-search btn-search"
                    type="submit"
                  >search
                  </button>
                </div>
              </div>
            </div>
            {!this.state.firstMount && <SearchResults data="sample data 1" />}
          </div>
        )
    }
}
