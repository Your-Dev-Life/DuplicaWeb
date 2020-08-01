import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import { FactoryList } from './factory';

const Routes = ({ api }) => (
  <Switch>
    <Route path='/' exact component={ Home } />
    <Route path='/factory' exact render={(props) => <FactoryList {...props} api={api} />} />
  </Switch>
);

Routes.propTypes = {
  api: PropTypes.object,
};

export default Routes;
