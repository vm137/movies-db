import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import './App.scss';
import ErrorBoundary from './ErrorBoundary';
import MainWindow from './MainWindow';

const App = ({
  // eslint-disable-next-line react/prop-types
  Router, location, context, store,
}) => (
  <div className="wrapper">
    <ErrorBoundary>
      <Provider store={store}>
        <MainWindow Router={Router} location={location} context={context} />
      </Provider>
    </ErrorBoundary>
    <div className="push" />
  </div>
);

App.prototypes = {
  Router: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  context: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

export default App;
