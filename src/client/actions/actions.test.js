import * as Action from './actions';
import { ACTIONS } from '../constants/constants';

describe('actions', () => {
  it('showSearchBlockAction', () => {
    expect(Action.showSearchBlockAction()).toEqual({ type: ACTIONS.SHOW_SEARCH_BLOCK });
  });
});
