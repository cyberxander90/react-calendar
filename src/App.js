import React from 'react';
import { Provider } from 'react-redux';
import Calendar from 'src/components/calendar';
import MonthGridConnected from 'src/components/month-grid';
import TimerInput from 'src/components/timer-input';
import buildStore from './redux/store';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="app">

      <Provider store={buildStore()}>
        <Calendar gridCmp={MonthGridConnected} />
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
