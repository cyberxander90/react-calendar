import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
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

export const Default = () => <MonthGrid dateStr={text('dateStr like 2020-05-20', undefined)} />;
export const MonthGridWithCustomCmp = () => (
  <MonthGrid
    dateStr={text('dateStr like 2020-05-20', undefined)}
    startOnMonday={boolean('Start On Monday', false)}
    cellCmp={({ day, isCurrentMonth }) => <div style={styles(isCurrentMonth)}>{day}</div>}
    cellHeaderCmp={({ day }) => <div style={{ background: '#150EED', }}>{day}</div>}
  />
);
