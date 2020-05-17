import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { getGridDates } from 'src/services/dates';
import moment from 'moment';
import MonthGrid from './month-grid';

export default {
  title: MonthGrid.name,
  decorators: [withKnobs]
};

const gridDates = getGridDates({ date: moment(), startOnMonday: false });

export const Default = () => (
  <MonthGrid
    gridDates={gridDates}
    month={moment().month()}
  />
);

const styles = (isCurrentMonth) => ({
  background: '#EF0E0E',
  opacity: isCurrentMonth ? '1' : '0.5',
  border: '1px solid black'
});
export const MonthGridWithCustomCmp = () => (
  <MonthGrid
    gridDates={gridDates}
    month={moment().month()}
    cellBodyCmp={({ day, isCurrentMonth }) => <div style={styles(isCurrentMonth)}>{day}</div>}
    cellHeaderCmp={({ day }) => <div style={{ background: '#150EED', }}>{day}</div>}
  />
);
