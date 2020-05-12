/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import moment from 'moment';
import MonthGridCell from './month-grid-cell';

const MonthGridCellConnected = ({ id, ...otherProps }) => {
  const data = useSelector((state) => state.events.data);
  const events = Object.keys(data)
    .map((key) => data[key])
    .filter(({ startDate }) => moment(startDate).format('YYYY-MM-DD') === id);

  return <MonthGridCell id={id} events={events} {...otherProps} />;
};

MonthGridCellConnected.propTypes = {
  id: PropTypes.string.isRequired
};

MonthGridCellConnected.defaultProps = { };

export default MonthGridCellConnected;
