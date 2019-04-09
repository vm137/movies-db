import axios from 'axios';
import { ACTIONS } from '../constants/constants';

/* action creators */
export const showSearchBlockAction = data => ({
  type: ACTIONS.SHOW_SEARCH_BLOCK,
  payload: data,
});

export function fetchMoviesAction(searchString, searchBy = '', offset = '', limit = '') {
  let callString = 'http://react-cdp-api.herokuapp.com/movies';
  callString += `?search=${searchString}&searchBy=${searchBy}&offset=${offset}&limit=${limit}`;

  return dispatch => axios.get(callString)
    .then(({ data }) => {
      dispatch(showSearchBlockAction(data));
    });
}

export const showSingleMovieAction = data => ({
  type: ACTIONS.SHOW_SINGLE_MOVIE,
  payload: data,
});

export function fetchSingleMovieAction(movieId) {
  return dispatch => axios.get(`http://react-cdp-api.herokuapp.com/movies/${movieId}`)
    .then(({ data }) => {
      dispatch(showSingleMovieAction(data));
    });
}
