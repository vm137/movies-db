// @flow

import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import ErrorBoundary from './ErrorBoundary';
import MainWindow from './MainWindow';

type Props = {
  Router: Function,
  location: string,
  context: Object,
  store: Object
}

const App = ({
  Router, location, context, store,
}: Props) => (
  <div className="wrapper">
    <ErrorBoundary>
      <Provider store={store}>
        <MainWindow Router={Router} location={location} context={context} />
      </Provider>
    </ErrorBoundary>
    <div className="push" />
  </div>
);

export default App;
