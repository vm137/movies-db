import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import storeFn from '../store';
import './App.scss';
import ErrorBoundary from './ErrorBoundary';
import MainWindow from './MainWindow';

const App = () => (
  <div className="wrapper">
    <Provider store={storeFn().store}>
      <PersistGate loading={null} persistor={storeFn().persistor}>
        <ErrorBoundary>
          <MainWindow />
        </ErrorBoundary>
      </PersistGate>
    </Provider>
    <div className="push" />
  </div>
);

export default App;
