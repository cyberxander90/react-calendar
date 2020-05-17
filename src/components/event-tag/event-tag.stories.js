/* eslint-disable react/prop-types */
import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';
import EventTag from 'src/components/event-tag';

export default {
  title: 'EventTag',
  decorators: [withKnobs]
};

const data = [
  {
    id: 1, color: 'red', remainder: 'Text 1', startDate: '2020-05-10 09-30', endDate: '2020-05-10 09-30'
  },
  {
    id: 2, color: 'green', remainder: 'Text 2', startDate: '2020-05-10 10-30', endDate: '2020-05-10-09-30'
  },
  {
    id: 3, color: 'blue', remainder: 'Text 3', startDate: '2020-05-10 05-20', endDate: '2020-05-10-09-30'
  },
  {
    id: 4, color: 'green', remainder: 'Text 4', startDate: '2020-05-10 10-30', endDate: '2020-05-10-09-30'
  },
  {
    id: 5, color: 'blue', remainder: 'Text 5', startDate: '2020-05-10 05-20', endDate: '2020-05-10-09-30'
  }
];

export const Default = () => (
  <div style={{ height: 400, width: 300, border: '1px solid' }}>
    <EventTag
      date="2020-01-01"
      events={data}
    />
  </div>
);

const Container = ({ height, itemHeight }) => (
  <div style={{
    height, width: 300, border: '1px solid', overflow: 'hidden', itemHeight
  }}
  >
    <EventTag
      date="2020-01-01"
      events={data}
    />
  </div>
);
export const SmallContainer = () => (
  <Container height={number('Height', 100)} itemHeight={number('Item Height', 30)} />
);
