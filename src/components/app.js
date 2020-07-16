import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './main';
import Login from './login';

const App = ({ api }) => (
  <Router>
    <Suspense fallback='loading'>
      <Switch>
        <Route
          path='/login'
          render={(props) => <Login {...props} api={api} />}
        />
        <Route
          path='/'
          render={(props) => <Main {...props} api={api} />}
        />
      </Switch>
    </Suspense>
  </Router>
);

App.propTypes = {
  api: PropTypes.object,
};

export default App;
