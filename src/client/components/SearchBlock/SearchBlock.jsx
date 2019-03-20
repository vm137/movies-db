import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchResults from '../SearchResults/SearchResults';
import COLOR from '../constants/constants';
import Utils from '../Utils/Utils';
import enterArrow from '../../img/enter-arrow.svg';
import './SearchBlock.scss';
import Logo from '../Logo/Logo';

export default class SearchBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstMount: true,
      titleButtonSelected: true,
      inputValue: '',
      sortByRelease: true,
    };
  }

  changeButtonsColor() {
    this.setState(prevState => ({ titleButtonSelected: !prevState.titleButtonSelected }));
  }

  makeSearch() {
    this.setState({ firstMount: false });
    const { titleButtonSelected, inputValue } = this.state;
    const { searchCB } = this.props;
    const searchBy = titleButtonSelected ? 'title' : 'genres';
    searchCB(inputValue, searchBy);
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value,
    });
  }

  handleSortClick() {
    const { sortByRelease } = this.state;
    this.setState({
      sortByRelease: !sortByRelease,
    });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.makeSearch();
    }
  }

  render() {
    const { numberFoundMovies, movies } = this.props;
    const {
      inputValue, firstMount, titleButtonSelected, sortByRelease,
    } = this.state;
    const sortReleaseColor = sortByRelease ? COLOR.NETFLIX_RED : COLOR.NETFLIX_GREY;
    const sortRatingColor = sortByRelease ? COLOR.NETFLIX_GREY : COLOR.NETFLIX_RED;

    return (
      <div className="search-block-wrapper">
        <div className="search-box-wrapper">
          <Logo />
          <div className="search-block">
            <p className="find-title">find your movie</p>

            <div className="input-wrapper">
              <input
                value={inputValue}
                onChange={evt => this.updateInputValue(evt)}
                onKeyPress={this.handleKeyPress.bind(this)}
                className="search-input"
                type="text"
              />
              <img className="img-arrow" src={enterArrow} alt="enter" />
            </div>

            <div className="search-buttons">
              <span className="search-by">search by</span>
              <button
                className={`btns-search btn-title ${titleButtonSelected ? 'btn-bg-red' : 'btn-bg-grey'}`}
                onClick={this.changeButtonsColor.bind(this)}
                onKeyPress={Utils.preventPressEnter}
                type="button"
              >
title
              </button>
              <button
                className={`btns-search btn-genre ${!titleButtonSelected ? 'btn-bg-red' : 'btn-bg-grey'}`}
                onClick={this.changeButtonsColor.bind(this)}
                onKeyPress={Utils.preventPressEnter}
                type="button"
              >
genre
              </button>

              <button
                onClick={this.makeSearch.bind(this)}
                className="btns-search btn-search"
                type="submit"
              >
search
              </button>
            </div>
          </div>
        </div>
        <div className="search-details">
          <div className="number-found-movies">
            {numberFoundMovies}
            {' '}
            movies found
          </div>
          <div className="sort-by">
            Sort by:
            <span
              role="button"
              tabIndex={0}
              onKeyPress={() => {}}
              className="sort-release-date"
              style={{ color: sortReleaseColor }}
              onClick={this.handleSortClick.bind(this)}
            >
              release date
            </span>
            <span
              role="button"
              tabIndex={-1}
              onKeyPress={() => {}}
              className="sort-rating"
              style={{ color: sortRatingColor }}
              onClick={this.handleSortClick.bind(this)}
            >
rating
            </span>
          </div>
        </div>
        {!firstMount && (
        <SearchResults
          movies={movies}
        />
        )}
      </div>
    );
  }
}

SearchBlock.propTypes = {
  numberFoundMovies: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchCB: PropTypes.PropTypes.func.isRequired,
};
