import { createAsyncThunk, } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAsyncEvents = createAsyncThunk(
  'events/fetch',
  async ({ fromDate, toDate }) => {
    const fromDateStr = fromDate.format('YYYY-MM-DD');
    const toDateStr = toDate.format('YYYY-MM-DD');
    const response = await axios.get(`http://localhost:5000/api/v1/events/from/${fromDateStr}/to/${toDateStr}`);
    return response.data;
  }
);

export const createAsyncEvent = createAsyncThunk(
  'events/create',
  async (event) => {
    const response = await axios.post('http://localhost:5000/api/v1/events', event);
    return response.data;
  }
);

export const editAsyncEvent = createAsyncThunk(
  'events/edit',
  async (event) => {
    const response = await axios.post(`http://localhost:5000/api/v1/events/${event.id}`, event);
    return response.data;
  }
);

export const deleteAsyncEvent = createAsyncThunk(
  'events/delete',
  async (event) => {
    await axios.delete(`http://localhost:5000/api/v1/events/${event.id}`);
    return event;
  }
);

export const deleteAllAsyncEvent = createAsyncThunk(
  'events/delete',
  async (id) => {
    await axios.delete(`http://localhost:5000/api/v1/events/ALL-${id}`);
    return { id };
  }
);
