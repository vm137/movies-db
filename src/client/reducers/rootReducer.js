import { ACTIONS } from '../constants/constants';

export default (state, action) => {
  switch (action.type) {
    case ACTIONS.SHOW_SEARCH_BLOCK:
      return { ...state, showPage: 'searchBlock' };

    case ACTIONS.PROPAGATE_MOVIES:
      return { ...state, movies: action.payload.data, total: action.payload.total };

    case ACTIONS.SHOW_SINGLE_MOVIE:
      return { ...state, showPage: 'singleMovie' };

    case ACTIONS.PROPAGATE_SINGLE_MOVIE:
      return { ...state, movie: action.payload };

    case ACTIONS.SWAP_SEARCH_BY:
      return { ...state, searchBy: !state.searchBy };

    case ACTIONS.SWAP_SORT_BY:
      return { ...state, sortBy: !state.sortBy };

    default:
      return state;
  }
};
