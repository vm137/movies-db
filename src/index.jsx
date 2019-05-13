import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import createStore from './store';

const { preloadedState } = window;

ReactDOM.hydrate(
  <App Router={Router} store={createStore(preloadedState)} />,
  document.getElementById('app'),
);
