import actions from '../actions/types';

export default (state, action) => {
  switch (action.type) {
    case actions.SHOW_SEARCH_BLOCK:
      return { ...state, showPage: 'searchBlock' };

    case actions.SHOW_SINGLE_MOVIE:
      return { ...state, showPage: 'singleMovie' };

    case actions.PROPAGATE_MOVIES:
      return { ...state, movies: action.payload.data, total: action.payload.total };

    case actions.PROPAGATE_SINGLE_MOVIE:
      return { ...state, movie: action.payload };

    case actions.SWAP_SEARCH_BY:
      return { ...state, searchBy: !state.searchBy };

    case actions.SWAP_SORT_BY:
      return { ...state, sortBy: !state.sortBy, movies: action.payload };

    default:
      return state;
  }
};
