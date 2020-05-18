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

const App = () => (
  <Provider store={buildStore()}>
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
  </Provider>
);

export default App;
