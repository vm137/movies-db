import axios from 'axios';
import { ACTIONS } from '../constants/constants';

/* action creators */

/* Movies */
export const showSearchBlockAction = () => ({
  type: ACTIONS.SHOW_SEARCH_BLOCK,
});

export const PropagateMoviesAction = data => ({
  type: ACTIONS.PROPAGATE_MOVIES,
  payload: data,
});

export function fetchMoviesAction(searchString, searchBy = '', offset = '', limit = '') {
  let callString = 'http://react-cdp-api.herokuapp.com/movies';
  callString += `?search=${searchString}&searchBy=${searchBy}&offset=${offset}&limit=${limit}`;

  return dispatch => axios.get(callString)
    .then(({ data }) => {
      dispatch(PropagateMoviesAction(data));
    });
}

/* Single Movie */
export const showSingleMovieAction = () => ({
  type: ACTIONS.SHOW_SINGLE_MOVIE,
});

export const PropagateSingleMovieAction = data => ({
  type: ACTIONS.PROPAGATE_SINGLE_MOVIE,
  payload: data,
});

export function fetchSingleMovieAction(movieId) {
  return dispatch => axios.get(`http://react-cdp-api.herokuapp.com/movies/${movieId}`)
    .then(({ data }) => {
      dispatch(PropagateSingleMovieAction(data));
    }).then(
      () => dispatch(showSingleMovieAction()),
    );
}

/* Search Block controls */
export const swapSearchByAction = () => ({
  type: ACTIONS.SWAP_SEARCH_BY,
});

export const swapSortByAction = () => ({
  type: ACTIONS.SWAP_SORT_BY,
});
