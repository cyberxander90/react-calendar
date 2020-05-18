/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React from 'react';
import PropTypes from 'src/services/prop-types';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { createAsyncEvent, deleteAllAsyncEvent } from 'src/redux/actions/events';
import { YYYY_MM_DD } from 'src/services/dates';
import MonthGridCell from './month-grid-cell';

const MonthGridCellConnected = ({ date, ...otherProps }) => {
  const dispatch = useDispatch();
  const eventsData = useSelector((state) => state.events.data); // TODO: use reselect

  const dateStr = moment(date).format(YYYY_MM_DD);
  const events = Object.keys(eventsData)
    .map((key) => eventsData[key])
    .filter(({ startDate }) => moment(startDate).format(YYYY_MM_DD) === dateStr);

  const onCreateEvent = (event) => dispatch(createAsyncEvent(event));
  const onDeleteAllEvents = () => {
    if (confirm('Do you want to delete all events in this day?')) {
      dispatch(deleteAllAsyncEvent(date.format(YYYY_MM_DD)));
    }
  };

  return (
    <MonthGridCell
      date={date}
      events={events}
      onCreateEvent={onCreateEvent}
      onDeleteAllEvents={onDeleteAllEvents}
      {...otherProps}
    />
  );
};

MonthGridCellConnected.propTypes = {
  date: PropTypes.date.isRequired
};

MonthGridCellConnected.defaultProps = { };

export default MonthGridCellConnected;
