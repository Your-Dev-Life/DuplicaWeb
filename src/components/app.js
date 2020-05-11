import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './main';
import Login from './login';

const App = (props) => {
  const api = props.api;
  return (
    <Router>
      <Suspense fallback="loading">
        <Switch>
          <Route
            path="/login"
            render={(props) => <Login {...props} api={api} />}
          />
          <Route
            path="/"
            render={(props) => <Main {...props} api={api} />}
          />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
