import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  MessageProvider,
  MessageNotification
} from '@dhouse.in/message-notification-mui';
import Main from './main';
import Login from './login';

const App = ({ api }) => (
  <MessageProvider>
    <Router>
      <Suspense fallback='loading'>
        <Switch>
          <Route
            path='/login'
            render={(props) => <Login {...props} api={api} />}
          />
          <Route path='/' render={(props) => <Main {...props} api={api} />} />
        </Switch>
      </Suspense>
    </Router>
    <MessageNotification />
  </MessageProvider>
);

App.propTypes = {
  api: PropTypes.object
};

export default App;
