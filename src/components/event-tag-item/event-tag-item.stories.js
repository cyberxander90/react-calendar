import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import EventTagItem from './event-tag-item';
import 'src/styles/index.scss';

export default {
  title: EventTagItem.name,
  decorators: [withKnobs]
};

export const Default = () => (
  <ul style={{ listStyle: 'none' }}>
    <EventTagItem
      date="2020-05-10"
      event={{
        remainder: text('Text', 'Daily Meeting'),
        color: text('Color', 'red'),
        startDate: text('Start Date', '2020-05-10 09-30'),
        endDate: text('End Date', '2020-05-10 09-30')
      }}
    />
  </ul>
);
