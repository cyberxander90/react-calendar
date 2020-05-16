import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { getGridDates } from 'src/services/grid-service';
import moment from 'moment';
import MonthGrid from './month-grid';

export default {
  title: MonthGrid.name,
  decorators: [withKnobs]
};

const styles = (isCurrentMonth) => ({
  background: '#EF0E0E',
  opacity: isCurrentMonth ? '1' : '0.5',
  border: '1px solid black'
});

const gridDates = getGridDates({ date: moment(), startOnMonday: false });

export const Default = () => (
  <MonthGrid
    grid={gridDates}
    monthValue={moment().month()}
  />
);
export const MonthGridWithCustomCmp = () => (
  <MonthGrid
    grid={gridDates}
    monthValue={moment().month()}
    cellCmp={({ day, isCurrentMonth }) => <div style={styles(isCurrentMonth)}>{day}</div>}
    cellHeaderCmp={({ day }) => <div style={{ background: '#150EED', }}>{day}</div>}
  />
);
