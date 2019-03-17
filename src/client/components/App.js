import React from 'react';
import './App.scss';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Header from './Header/Header';
import SearchBlock from './SearchBlock/SearchBlock';

const App = () => {
    return (
      <div className='wrapper'>
        <Header />
        <ErrorBoundary>
          <SearchBlock />
        </ErrorBoundary>

        <div className="push" />
      </div>
    )
};

export default App;
