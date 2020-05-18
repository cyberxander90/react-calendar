import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import EventDetails from './event-details';

export default {
  title: EventDetails.name,
  decorators: [withKnobs]
};

export const Default = () => (
  <EventDetails
    remainder={text('Remainder', 'hello')}
    color={text('Color', 'red')}
    startDate={text('Start Date', '2020-02-01 10:10 am')}
    endDate={text('End Date', '2020-02-01 12:12 am')}
    city={text('City', 'Montevideo')}
  />
);
