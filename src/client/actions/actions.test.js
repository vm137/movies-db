import moxios from 'moxios';
import * as Action from './actions';
import actions from './types';

describe('actions', () => {
  test('showSearchBlockAction', () => {
    expect(Action.showSearchBlockAction())
      .toEqual({ type: actions.SHOW_SEARCH_BLOCK });
  });

  it('should sort array by vote/year', () => {
    let sortBy = true; // by vote
    const movies = [{
      release_date: '1991-10-20',
      vote_average: 7.7,
    }, {
      release_date: '1980-10-20',
      vote_average: 5.1,
    }];

    const correctSortedArray = {
      payload: [
        { release_date: '1980-10-20', vote_average: 5.1 },
        { release_date: '1991-10-20', vote_average: 7.7 },
      ],
      type: 'SWAP_SORT_BY',
    };

    let actionWithMoviesSorted = Action.swapSortByAction(movies, sortBy);
    expect(actionWithMoviesSorted)
      .toEqual(correctSortedArray);

    sortBy = false; // by year
    actionWithMoviesSorted = Action.swapSortByAction(movies, sortBy);
    expect(actionWithMoviesSorted)
      .toEqual(correctSortedArray);
  });

  /* fetch tests */
  describe('fetch actions', () => {
    beforeEach(() => {
      moxios.install();
    });
    afterEach(() => {
      moxios.uninstall();
    });

    test('fetchMoviesAction', (done) => {
      const dispatch = jest.fn();

      moxios.stubRequest('http://react-cdp-api.herokuapp.com/movies?search=searchString&searchBy=&offset=&limit=', {
        status: 200,
        responseText: 'data',
      });

      const respFn = Action.fetchMoviesAction('searchString');
      respFn(dispatch);

      moxios.wait(() => {
        expect(dispatch.mock.calls[0]).toEqual([{ payload: 'data', type: 'PROPAGATE_MOVIES' }]);
        done();
      });
    });

    test('fetchSingleMovieAction', (done) => {
      const dispatch = jest.fn();

      moxios.stubRequest('http://react-cdp-api.herokuapp.com/movies/1', {
        status: 200,
        responseText: 'data',
      });

      const movieId = 1;
      const respFn = Action.fetchSingleMovieAction(movieId);
      respFn(dispatch);

      moxios.wait(() => {
        expect(dispatch.mock.calls[0]).toEqual([{ payload: 'data', type: 'PROPAGATE_SINGLE_MOVIE' }]);
        expect(dispatch.mock.calls[1]).toEqual([{ type: 'SHOW_SINGLE_MOVIE' }]);
        done();
      });
    });
  });
});
