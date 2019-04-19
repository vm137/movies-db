import React from 'react';
import {
  BrowserRouter as Router, Route, Link, Switch, Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBlock from '../SearchBlock';
import SingleMovie from '../SingleMovie';
import './style.scss';

const NoMatch = ({ location }) => (
  <div>
    <h3>
      Page 404. No match for
      <code>{location.pathname}</code>
    </h3>
    <Link to="/search">back to search</Link>
  </div>
);

const MainWindow = () => (
  <div className="mainWindow">
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/search" />} />
        <Route path="/search/:query?" component={SearchBlock} />
        <Route path="/film/:id" component={SingleMovie} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  </div>
);

NoMatch.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MainWindow;
