import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import { FactoryList } from './factory';
import { CompanyList } from './company';

const Routes = ({ api }) => (
  <Switch>
    <Route path='/' exact component={Home} />
    <Route
      path='/factory'
      exact
      render={(props) => <FactoryList {...props} api={api} />}
    />
    <Route
      path='/company'
      exact
      render={(props) => <CompanyList {...props} api={api} />}
    />
  </Switch>
);

Routes.propTypes = {
  api: PropTypes.object
};

export default Routes;
