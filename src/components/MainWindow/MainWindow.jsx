import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SearchBlock from '../SearchBlock';
import SingleMovie from '../SingleMovie';
import NoMatch from '../NoMatch';
import './style.scss';

// eslint-disable-next-line react/prop-types
const MainWindow = ({ Router, location, context }) => (
  <div className="mainWindow">
    <Router location={location} context={context}>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/search" />} />
        <Route path="/search/:query?" component={SearchBlock} />
        <Route path="/film/:id" component={SingleMovie} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  </div>
);

export default MainWindow;
