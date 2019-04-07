import { ACTIONS } from '../constants/constants';

export default (state, action) => {
  switch (action.type) {
    case ACTIONS.SHOW_SEARCH_BLOCK:
      return { ...state, showPage: 'searchBlock' };

    case ACTIONS.SHOW_SINGLE_MOVIE:

      return { ...state, showPage: 'singleMovie' };

    default:
      return state;
  }
};
