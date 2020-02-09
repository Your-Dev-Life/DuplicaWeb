import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Main';
import Login from "./login";

const App = () => {
  return (
    <Router>
      <Suspense fallback="loading">
        <Switch>
          <Route path="/login" component={ Login } />
          <Route path="/" component={ Main } />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
