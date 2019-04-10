import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchResults from '../SearchResults';
import Logo from '../Logo';
import Utils from '../Utils/Utils';
import { COLOR } from '../../constants/constants';
import enterArrow from '../../img/enter-arrow.svg';
import './style.scss';

export default class SearchBlock extends Component {
  static propTypes = {
    moviesTotalR: PropTypes.number.isRequired,
    fetchMovies: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      titleButtonSelected: true,
      sortByRelease: true,
    };
    this.textInput = React.createRef();
    this.onKeyPress = this.handleKeyPress.bind(this);
    this.swapSearchByButtonsColor = this.swapSearchByButtonsColor.bind(this);
    this.handleSortByClick = this.handleSortByClick.bind(this);
    this.makeSearch = this.makeSearch.bind(this);
  }

  componentDidMount() {
    this.textInput.focus();
  }

  swapSearchByButtonsColor() {
    this.setState(prevState => ({ titleButtonSelected: !prevState.titleButtonSelected }));
  }

  makeSearch() {
    const { titleButtonSelected, inputValue } = this.state;
    const searchBy = titleButtonSelected ? 'title' : 'genres';
    const { fetchMovies } = this.props;
    fetchMovies(inputValue, searchBy);
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value, // TODO: make search hints
    });
  }

  handleSortByClick() {
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
    const { moviesTotalR } = this.props;
    const {
      inputValue, titleButtonSelected, sortByRelease,
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
                onKeyPress={this.onKeyPress}
                ref={(input) => { this.textInput = input; }}
                className="search-input"
                type="text"
              />
              <img className="img-arrow" src={enterArrow} alt="enter" />
            </div>

            <div className="search-buttons">
              <span className="search-by">search by</span>
              <button
                className={`btns-search btn-title ${titleButtonSelected ? 'btn-bg-red' : 'btn-bg-grey'}`}
                onClick={this.swapSearchByButtonsColor}
                onKeyPress={Utils.preventPressEnter}
                type="button"
              >
title
              </button>
              <button
                className={`btns-search btn-genre ${!titleButtonSelected ? 'btn-bg-red' : 'btn-bg-grey'}`}
                onClick={this.swapSearchByButtonsColor}
                onKeyPress={Utils.preventPressEnter}
                type="button"
              >
genre
              </button>

              <button
                onClick={this.makeSearch}
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
            {moviesTotalR}
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
              onClick={this.handleSortByClick}
            >
              release date
            </span>
            <span
              role="button"
              tabIndex={-1}
              onKeyPress={() => {}}
              className="sort-rating"
              style={{ color: sortRatingColor }}
              onClick={this.handleSortByClick}
            >
rating
            </span>
          </div>
        </div>
        <SearchResults />
      </div>
    );
  }
}
