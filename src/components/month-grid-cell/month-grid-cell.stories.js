import React from 'react';
import {
  withKnobs, text, boolean, number
} from '@storybook/addon-knobs';
import MonthGridCell from './month-grid-cell';

export default {
  title: MonthGridCell.name,
  decorators: [withKnobs]
};

const styles = () => ({ width: 200, height: 200 });

export const Default = () => (
  <div style={styles()}>
    <MonthGridCell
      id={text('Id', '2020-05-10')}
      day={number('Day', 3)}
      tabIndex={number('TabIndex', 0)}
      isCurrentMonth={boolean('Is Current Month', true)}
    />
  </div>
);
