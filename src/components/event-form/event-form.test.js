import React from 'react';
import {
  render, fireEvent
} from '@testing-library/react';
import selectEvent from 'react-select-event';


import EventForm from './event-form';

const inputText = (input, value) => {
  fireEvent.change(input, { target: { value } });
};


describe(`Test ${EventForm.name} component`, () => {
  it('cancel button is invoked correctly', () => {
    const onCancel = jest.fn();
    const { getByText } = render(
      <EventForm
        date="2020-01-01"
        onCancel={onCancel}
      />
    );

    fireEvent.click(getByText('Cancel'));
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it('submit with invalid data should display error messages', async () => {
    const onSubmit = jest.fn();
    const {
      getByText, queryByText, getByLabelText
    } = render(
      <EventForm
        date="2020-01-01"
        onSubmit={onSubmit}
      />
    );

    expect(queryByText('Invalid range')).toBeNull();
    expect(queryByText('Required')).toBeNull();

    await selectEvent.select(getByLabelText('From-hours'), ['04']);

    const saveButton = getByText('Save');
    fireEvent.click(saveButton);

    expect(getByText('Required')).toBeInTheDocument();
    expect(getByText('Invalid range')).toBeInTheDocument();
    expect(onSubmit).toHaveBeenCalledTimes(0);
  });

  it('submit correctly data', async () => {
    // ARRANGE
    const onSubmit = jest.fn();
    const { getByLabelText, getByText } = render(
      <EventForm
        date="2020-01-01"
        onSubmit={onSubmit}
      />
    );

    // ACT

    // remainder
    inputText(getByLabelText('Remainder'), 'retrospective meeting');

    // time
    await selectEvent.select(getByLabelText('From-hours'), ['02']);
    await selectEvent.select(getByLabelText('From-mins'), ['03']);
    await selectEvent.select(getByLabelText('To-hours'), ['04']);
    await selectEvent.select(getByLabelText('To-mins'), ['05']);

    // date
    fireEvent.click(getByText('2020-01-01'));
    fireEvent.click(getByText('30'));

    // city
    inputText(getByLabelText('City'), 'Montevideo');

    // color
    await selectEvent.select(getByLabelText('Pick Color'), ['Red']);

    // press save
    const saveButton = getByText('Save');
    fireEvent.click(saveButton);

    // ASSERT
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit.mock.calls[0]).toEqual([{
      city: 'Montevideo',
      color: 'red',
      endDate: '2020-01-30 04:05',
      remainder: 'retrospective meeting',
      startDate: '2020-01-30 02:03'
    }]);
  });
});
