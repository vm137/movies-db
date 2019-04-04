import { ACTIONS } from '../constants/constants';

export const changeInputString = string => ({
  type: ACTIONS.CHANGE_INPUT_STRING,
  payload: string,
});

export const fetchMovies = {
  type: ACTIONS.FETCH_MOVIES,
};

export const fetchSingleMovie = movieId => ({
  type: ACTIONS.FETCH_SINGLE_MOVIE,
  payload: movieId,
});

export const showSingleMovie = {
  type: ACTIONS.SHOW_SINGLE_MOVIE,
};
