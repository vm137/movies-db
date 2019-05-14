import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/rootReducer';

const initialState = {
  inputValue: '',
  movies: [],
  movie: {},
  limit: 10,
  offset: 0,
  total: 0,
  searchBy: true,
  sortBy: true,
};

/* eslint-disable no-underscore-dangle */
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

export default preloadedState => createStore(
  reducer,
  preloadedState || initialState,
  compose(
    applyMiddleware(thunk),
  ),
);
