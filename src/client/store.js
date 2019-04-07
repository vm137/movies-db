import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/rootReducer';

const initialState = {
  showPage: 'searchBlock',
  movies: [],
  movie: {},
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
