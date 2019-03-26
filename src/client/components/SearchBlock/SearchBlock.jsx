import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchResults from '../SearchResults';
import Logo from '../Logo';
import Utils from '../Utils/Utils';
import COLOR from '../constants/constants';
import enterArrow from '../../img/enter-arrow.svg';
import './style.scss';

export default class SearchBlock extends Component {
  static propTypes = {
    numberFoundMovies: PropTypes.number.isRequired,
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
    searchCB: PropTypes.PropTypes.func.isRequired,
    onClick: PropTypes.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      firstMount: true,
      titleButtonSelected: true,
      inputValue: 'you', // TODO: make '' after testing.
      sortByRelease: true,
    };
    this.textInput = React.createRef();
    this.onKeyPress = this.handleKeyPress.bind(this);
    this.makeSearch = this.makeSearch.bind(this);
    this.swapSearchByButtonsColor = this.swapSearchByButtonsColor.bind(this);
    this.handleSortByClick = this.handleSortByClick.bind(this);
  }


  componentDidMount() {
    this.textInput.focus();

    // TODO: delete after testing.
    this.makeSearch();
  }

  swapSearchByButtonsColor() {
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
    const { numberFoundMovies, movies, onClick } = this.props;
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
        {!firstMount && (
        <SearchResults onClick={onClick} movies={movies} />
        )}
      </div>
    );
  }
}
