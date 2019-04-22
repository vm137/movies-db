import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchResults from '../SearchResults';
import Logo from '../Logo';
import Utils from '../Utils/Utils';
import COLOR from '../../constants/constants';
import enterArrow from '../../img/enter-arrow.svg';
import './style.scss';

export default class SearchBlock extends Component {
  static propTypes = {
    fetchMovies: PropTypes.func.isRequired,
    movies: PropTypes.arrayOf(Object).isRequired,
    totalR: PropTypes.number.isRequired,
    swapSearchBy: PropTypes.func.isRequired,
    swapSortBy: PropTypes.func.isRequired,
    searchBy: PropTypes.bool.isRequired,
    sortBy: PropTypes.bool.isRequired,
    history: PropTypes.objectOf(PropTypes.any),
    match: PropTypes.shape({
      params: PropTypes.shape({
        query: PropTypes.string,
      }),
    }),
  };

  static defaultProps = {
    history: {},
    match: {
      params: {
        query: '',
      },
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.textInput = React.createRef();
    this.onKeyPress = this.handleKeyPress.bind(this);
    this.handleSearchBy = this.handleSearchBy.bind(this);
    this.handleSortBy = this.handleSortBy.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  componentDidMount() {
    const { fetchMovies, match, searchBy } = this.props;
    const { query } = match.params;
    const searchByParam = searchBy ? 'title' : 'genres';
    if (query && query.length > 0) {
      this.setState({
        inputValue: query,
      });
      fetchMovies(query, searchByParam);
    }

    this.textInput.focus();
  }

  handleSearchClick() {
    const { inputValue } = this.state;
    const { fetchMovies, searchBy, history } = this.props;
    const searchByParam = searchBy ? 'title' : 'genres';

    if (inputValue.length > 0) {
      history.push(`/search/${inputValue}`);
      fetchMovies(inputValue, searchByParam);
    }
  }

  handleSearchBy() {
    const { swapSearchBy } = this.props;
    swapSearchBy();
  }

  handleSortBy() {
    const { swapSortBy, movies, sortBy } = this.props;
    swapSortBy(movies, sortBy);
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value, // TODO: make search hints
    });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleSearchClick();
    }
  }

  render() {
    const { totalR, searchBy, sortBy } = this.props;
    const { inputValue } = this.state;
    const sortReleaseColor = sortBy ? COLOR.NETFLIX_RED : COLOR.NETFLIX_GREY;
    const sortRatingColor = sortBy ? COLOR.NETFLIX_GREY : COLOR.NETFLIX_RED;

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
                className={`btns-search btn-title ${searchBy ? 'btn-bg-red' : 'btn-bg-grey'}`}
                onClick={this.handleSearchBy}
                onKeyPress={Utils.preventPressEnter}
                type="button"
              >
title
              </button>
              <button
                className={`btns-search btn-genre ${!searchBy ? 'btn-bg-red' : 'btn-bg-grey'}`}
                onClick={this.handleSearchBy}
                onKeyPress={Utils.preventPressEnter}
                type="button"
              >
genre
              </button>

              <button
                onClick={this.handleSearchClick}
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
            {totalR}
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
              onClick={this.handleSortBy}
            >
              release date
            </span>
            <span
              role="button"
              tabIndex={-1}
              onKeyPress={() => {}}
              className="sort-rating"
              style={{ color: sortRatingColor }}
              onClick={this.handleSortBy}
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
