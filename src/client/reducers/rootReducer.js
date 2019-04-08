import { ACTIONS } from '../constants/constants';

export default (state, action) => {
  switch (action.type) {
    case ACTIONS.SHOW_SEARCH_BLOCK:
      return {
        ...state, showPage: 'searchBlock', movies: action.payload.data || [], total: action.payload.total || 0,
      };

    case ACTIONS.SHOW_SINGLE_MOVIE:
      return { ...state, showPage: 'singleMovie', movie: action.payload };

    default:
      return state;
  }
};
