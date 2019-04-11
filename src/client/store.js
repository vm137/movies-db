import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/rootReducer';

const initialState = {
  inputValue: '',
  showPage: 'searchBlock',
  movies: [],
  movie: {},
  limit: 10,
  offset: 0,
  total: 0,
  searchBy: true,
  sortBy: true,
};

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);

export default store;
