import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { fetchAsyncEvents } from 'src/redux/actions/events.actions';
import { getGridDates } from 'src/services/grid-service';
import { MonthGrid } from 'src/components/month-grid';
import MonthGridCellConnected from 'src/components/month-grid-cell';

const getInitData = (dateStr, startOnMonday) => {
  const date = moment(dateStr);
  const dates = getGridDates({ date, startOnMonday });
  return { date, dates };
};

const fetchEvents = (dates) => {
  const fromDate = dates[0][0];
  const toDate = dates[dates.length - 1][6];
  return fetchAsyncEvents({ fromDate, toDate });
};

const MonthGridConnected = ({
  dateStr, startOnMonday
}) => {
  const dispatch = useDispatch();
  const [month, setMonth] = useState(null);
  const [gridDates, setGridDates] = useState(null);

  useEffect(() => {
    const { date, dates } = getInitData(dateStr, startOnMonday);
    setMonth(date.month());
    setGridDates(dates);
    dispatch(fetchEvents(dates));
  }, [dispatch, dateStr, startOnMonday]);

  return gridDates && month !== null && (
    <MonthGrid
      grid={gridDates}
      startOnMonday={startOnMonday}
      monthValue={month}
      cellCmp={MonthGridCellConnected}
    />
  );
};

MonthGridConnected.propTypes = {
  dateStr: PropTypes.string.isRequired,
  startOnMonday: PropTypes.bool.isRequired
};

MonthGridConnected.defaultProps = { };

export default MonthGridConnected;
