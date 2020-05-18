import { createAsyncThunk, } from '@reduxjs/toolkit';
import axios from 'axios';
import { YYYY_MM_DD } from 'src/services/dates';
import { withToast } from './toast';

export const fetchAsyncEvents = createAsyncThunk(
  'events/fetch',
  async ({ fromDate, toDate }, { dispatch }) => {
    const fromDateStr = fromDate.format(YYYY_MM_DD);
    const toDateStr = toDate.format(YYYY_MM_DD);
    const response = await withToast(axios.get(`http://localhost:5000/api/v1/events/from/${fromDateStr}/to/${toDateStr}`), {
      dispatch,
      text: 'Failed to get events'
    });
    return response.data;
  }
);

export const createAsyncEvent = createAsyncThunk(
  'events/create',
  async (event, { dispatch }) => {
    const response = await withToast(axios.post('http://localhost:5000/api/v1/events', event), {
      dispatch,
      text: 'Failed creating event'
    });
    return response.data;
  }
);

export const editAsyncEvent = createAsyncThunk(
  'events/edit',
  async (event, { dispatch }) => {
    const response = await withToast(axios.post(`http://localhost:5000/api/v1/events/${event.id}`, event), {
      dispatch,
      text: 'Failed editing event'
    });
    return response.data;
  }
);

export const deleteAsyncEvent = createAsyncThunk(
  'events/delete',
  async (event, { dispatch }) => {
    await withToast(axios.delete(`http://localhost:5000/api/v1/events/${event.id}`), {
      dispatch,
      text: 'Failed deleting event'
    });
    return event;
  }
);

export const deleteRangeAsyncEvent = createAsyncThunk(
  'events/deleteAll',
  async (id, { dispatch }) => {
    await withToast(axios.delete(`http://localhost:5000/api/v1/events?date=${id}`), {
      dispatch,
      text: 'Failed deleting events'
    });
    return { id };
  }
);
