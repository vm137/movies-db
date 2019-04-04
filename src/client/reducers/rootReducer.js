import { ACTIONS } from '../constants/constants';

const initialState = {
  searchString: '',
  movies: [],
  movieId: null,
  page: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_INPUT_STRING:
      return { ...state, searchString: action.searchString };

    case ACTIONS.FETCH_MOVIES:
      return { state };

    case ACTIONS.FETCH_SINGLE_MOVIE:
      return { state };

    case ACTIONS.SHOW_SINGLE_MOVIE:
      return { ...state, movieId: action.movieId };

    default:
      return state;
  }
};
