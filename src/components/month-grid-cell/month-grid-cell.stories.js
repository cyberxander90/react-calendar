import React from 'react';
import { action } from '@storybook/addon-actions';
import MonthGridCell from './month-grid-cell';

export default {
  title: MonthGridCell.name
};

const data = [
  {
    id: '1', color: 'red', remainder: 'Text 1', startDate: '2020-05-10 09-30', endDate: '2020-05-10 09-30'
  },
  {
    id: '2', color: 'green', remainder: 'Text 2', startDate: '2020-05-10 10-30', endDate: '2020-05-10-09-30'
  }
];

// TODO: provide a redux provider
export const Default = () => (
  <div style={{ width: 200, height: 200 }}>
    <MonthGridCell
      date="2020-05-10"
      day={3}
      events={data}
      onCreateEvent={action('OnCreate')}
      onDeleteAllEvents={action('OnDelete')}
    />
  </div>
);
