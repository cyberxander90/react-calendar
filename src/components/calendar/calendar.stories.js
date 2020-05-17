import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import moment from 'moment';
import Calendar from './calendar';
import 'src/styles/index.scss';

export default {
  title: Calendar.name,
  decorators: [withKnobs]
};

export const Default = () => (
  <Calendar
    date={text('Date', moment())}
    onUpdateDate={action('onUpdateDate')}
  />
);

export const CustomGrid = () => (
  <Calendar
    GridCmp={({ date }) => (
      <h1>
        {`You are on: ${date}`}
      </h1>
    )}
    date={text('Date', moment())}
    onUpdateDate={action('onUpdateDate')}
  />
);
