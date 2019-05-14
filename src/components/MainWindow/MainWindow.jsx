// @flow

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SearchBlock from '../SearchBlock';
import SingleMovie from '../SingleMovie';
import NoMatch from '../NoMatch';
import './style.scss';

type Props = {
  Router: Function,
  location: string,
  context: Object
}

const MainWindow = ({ Router, location, context }: Props) => (
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
