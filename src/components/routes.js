import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import Factory from './factory';

const Routes = ({ api }) => (
  <Switch>
    <Route path='/' exact component={ Home } />
    <Route path='/factory' exact render={(props) => <Factory {...props} api={api} />} />
  </Switch>
);

export default Routes;
