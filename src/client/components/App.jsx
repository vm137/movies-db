import React from 'react';
import './App.scss';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import MainWindow from './MainWindow/MainWindow';

const App = () => (
  <div className="wrapper">
    <ErrorBoundary>
      <MainWindow />
    </ErrorBoundary>

    <div className="push" />
  </div>
);

export default App;
