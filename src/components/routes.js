import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Home from './home';
import Factory from './factory';

const Routes = () => (
  <Switch>
    <Route path='/' exact component={ Home } />
    <Route path='/factory' exact component={ Factory } />
  </Switch>
);

export default Routes;
