/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { createAsyncEvent } from 'src/redux/actions/events.actions';
import MonthGridCell from './month-grid-cell';

const MonthGridCellConnected = ({ id, ...otherProps }) => {
  const data = useSelector((state) => state.events.data);
  const dispatch = useDispatch();

  const events = Object.keys(data)
    .map((key) => data[key])
    .filter(({ startDate }) => moment(startDate).format('YYYY-MM-DD') === id);
  const onCreateEvent = (event) => {
    dispatch(createAsyncEvent(event));
  };

  return <MonthGridCell id={id} events={events} onCreateEvent={onCreateEvent} {...otherProps} />;
};

MonthGridCellConnected.propTypes = {
  id: PropTypes.string.isRequired
};

MonthGridCellConnected.defaultProps = { };

export default MonthGridCellConnected;
