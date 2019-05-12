import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import ErrorBoundary from './ErrorBoundary';
import MainWindow from './MainWindow';
import store from '../store';

const App = () => (
  <div className="wrapper">
    <ErrorBoundary>
      <Provider store={store}>
        <MainWindow />
      </Provider>
    </ErrorBoundary>
    <div className="push" />
  </div>
);

export default App;
