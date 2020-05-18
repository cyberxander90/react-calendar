import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import MonthPage from 'src/pages/month';
import buildStore from 'src/redux/store';
import ToastConnected from 'src/components/toast';
import Error from 'src/components/error';

const App = () => (
  <Provider store={buildStore()}>
    <Error>
      <ToastConnected />
      <Router>
        <Switch>
          <Route path={['/month/:date', '/']}>
            <MonthPage />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </Error>
  </Provider>
);

export default App;
