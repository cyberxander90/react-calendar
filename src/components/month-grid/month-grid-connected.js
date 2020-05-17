import React, { useState, useEffect } from 'react';
import PropTypes from 'src/services/prop-types';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { fetchAsyncEvents } from 'src/redux/actions/events.actions';
import { getGridDates } from 'src/services/dates';
import { MonthGrid } from 'src/components/month-grid';
import MonthGridCellConnected from 'src/components/month-grid-cell';

const fetchEvents = (dates) => {
  const fromDate = dates[0][0];
  const toDate = dates[dates.length - 1][6];
  return fetchAsyncEvents({ fromDate, toDate });
};

const MonthGridConnected = ({ date, startOnMonday }) => {
  const dispatch = useDispatch();
  const [gridDates, setGridDates] = useState([]);
  useEffect(() => {
    const newGridDates = getGridDates({ date, startOnMonday });
    setGridDates(newGridDates);
    dispatch(fetchEvents(newGridDates));
  }, [dispatch, date, startOnMonday]);

  const month = moment(date).month();

  return gridDates && month !== null && (
    <MonthGrid
      gridDates={gridDates}
      startOnMonday={startOnMonday}
      monthNumber={month}
      cellBodyCmp={MonthGridCellConnected}
    />
  );
};

MonthGridConnected.propTypes = {
  date: PropTypes.date.isRequired,
  startOnMonday: PropTypes.bool
};

MonthGridConnected.defaultProps = {
  startOnMonday: false
};

export default MonthGridConnected;
