import React from 'react';
import EventForm from './event-form';

export default {
  title: EventForm.name
};

// eslint-disable-next-line no-alert, no-undef
export const Default = () => <EventForm text="hello" onSubmit={({ remainder }) => alert(remainder)} />;
