import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
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

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(
  persistedReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(thunk),
  ),
);

const persistor = persistStore(store);

export { store, persistor };
