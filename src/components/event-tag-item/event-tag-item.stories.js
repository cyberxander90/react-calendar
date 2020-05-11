import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import EventTagItem from './event-tag-item';

export default {
  title: EventTagItem.name,
  decorators: [withKnobs]
};

export const Default = () => (
  <ul style={{ listStyle: 'none' }}>
    <EventTagItem
      remainder={text('Text', 'Daily Meeting')}
      color={text('Color', 'red')}
      time={text('Time', '10:25am')}
    />
    <EventTagItem
      remainder={text('Text', 'Daily')}
      color={text('Color', 'blue')}
      time={text('Time', '11:25am')}
    />
  </ul>
);
