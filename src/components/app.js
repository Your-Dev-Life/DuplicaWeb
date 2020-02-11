import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import api from "./api";
import Auth from './auth';
import Main from './Main';
import Login from "./login";

const App = () => {
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
