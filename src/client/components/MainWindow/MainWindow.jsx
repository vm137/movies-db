import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import SearchBlock from '../SearchBlock';
import SingleMovie from '../SingleMovie';
import NoMatch from '../NoMatch';
import './style.scss';

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

export default MainWindow;
