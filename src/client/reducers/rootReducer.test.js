import ACTIONS from '../actions/types';
import rootReducer from './rootReducer';

describe('rootReducer', () => {
  it('SHOW_SEARCH_BLOCK', () => {
    const newState = rootReducer({}, { type: ACTIONS.SHOW_SEARCH_BLOCK });
    expect(newState.showPage).toEqual('searchBlock');
  });

  it('SHOW_SINGLE_MOVIE', () => {
    const newState = rootReducer({}, { type: ACTIONS.SHOW_SINGLE_MOVIE });
    expect(newState.showPage).toEqual('singleMovie');
  });

  it('PROPAGATE_MOVIES', () => {
    const newState = rootReducer({}, {
      type: ACTIONS.PROPAGATE_MOVIES,
      payload: {
        data: 'data',
        total: 'total',
      },
    });
    expect(newState.movies).toEqual('data');
    expect(newState.total).toEqual('total');
  });

  it('PROPAGATE_SINGLE_MOVIE', () => {
    const newState = rootReducer([], {
      type: ACTIONS.PROPAGATE_SINGLE_MOVIE,
      payload: 'movie',
    });
    expect(newState.movie).toEqual('movie');
  });

  it('SWAP_SEARCH_BY', () => {
    const newState = rootReducer({ searchBy: true }, {
      type: ACTIONS.SWAP_SEARCH_BY,
    });
    expect(newState.searchBy).toEqual(false);
  });

  it('SWAP_SORT_BY', () => {
    const newState = rootReducer({ sortBy: true }, {
      type: ACTIONS.SWAP_SORT_BY,
      payload: 'movies',
    });
    expect(newState.sortBy).toEqual(false);
    expect(newState.movies).toEqual('movies');
  });

  it('default', () => {
    const newState = rootReducer({}, { type: undefined });
    expect(newState).toEqual({});
  });
});
