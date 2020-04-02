import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from './auth';
import Main from './main';
import Login from './login';

const App = (props) => {
  const api = props.api;
  const auth = new Auth(api);
  return (
    <Router>
      <Suspense fallback="loading">
        <Switch>
          <Route
            path="/login"
            render={(props) => <Login {...props} auth={auth} />}
          />
          <Route
            path="/"
            render={(props) => <Main {...props} auth={auth} api={api} />}
          />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
