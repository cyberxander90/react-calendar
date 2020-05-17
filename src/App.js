import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import TimerInput from 'src/components/timer-input';
import MonthPage from 'src/pages/month.page';
import buildStore from './redux/store';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="app">

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
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <TimerInput />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
