import actions from '../actions/types';
import rootReducer from './rootReducer';

describe('rootReducer', () => {
  it('PROPAGATE_MOVIES', () => {
    const newState = rootReducer({}, {
      type: actions.PROPAGATE_MOVIES,
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
      type: actions.PROPAGATE_SINGLE_MOVIE,
      payload: 'movie',
    });
    expect(newState.movie).toEqual('movie');
  });

  it('SWAP_SEARCH_BY', () => {
    const newState = rootReducer({ searchBy: true }, {
      type: actions.SWAP_SEARCH_BY,
    });
    expect(newState.searchBy).toEqual(false);
  });

  it('SWAP_SORT_BY', () => {
    const newState = rootReducer({ sortBy: true }, {
      type: actions.SWAP_SORT_BY,
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
