import React from 'react';
import { action } from '@storybook/addon-actions';
import EventForm from './event-form';

export default {
  title: EventForm.name
};

export const Default = () => (
  <div style={{ width: 400 }}>
    <EventForm
      id="2020-01-01"
      onSubmit={action('Submitted')}
      onCancel={action('Cancel')}
    />
  </div>
);
