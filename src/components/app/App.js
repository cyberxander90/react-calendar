import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import MonthPage from 'src/pages/month.page';
import buildStore from 'src/redux/store';

const App = () => (
  <Provider store={buildStore()}>
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
