import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
// import { store, persistor } from '../store'; ?? it apparently doesn't work
import './App.scss';
import ErrorBoundary from './ErrorBoundary';
import MainWindow from './MainWindow';


const App = () => (
  <div className="wrapper">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary>
          <MainWindow />
        </ErrorBoundary>
      </PersistGate>
    </Provider>
    <div className="push" />
  </div>
);

export default App;
