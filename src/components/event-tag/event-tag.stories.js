import React from 'react';
// import EventTag from 'src/components/event-tag';

export default {
  title: 'EventTag'
};

const data = [
  {
    id: 1, color: 'red', remainder: 'Text 1', dateTime: '2020-05-10-09-30'
  },
  {
    id: 2, color: 'green', remainder: 'Text 2', dateTime: '2020-05-10-10-30'
  },
  {
    id: 3, color: 'blue', remainder: 'Text 3', dateTime: '2020-05-10-11-'
  }
];

export const Default = () => <div events={data} />;
