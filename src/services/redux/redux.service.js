/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export function PendingRequests() {
  this.pending = [];
  this.arePendingRequests = () => this.pending.length > 0;

  this.add = ({ requestId }) => {
    this.pending.push(requestId);
    return this.arePendingRequests();
  };

  this.remove = ({ requestId }) => {
    const index = this.pending.indexOf(requestId);
    if (index !== -1) {
      this.pending.splice(index, 1);
    }
    return this.arePendingRequests();
  };
}

export const createSliceAdapter = (name, { fetch }) => {
  const pendingRequests = new PendingRequests();

  return createSlice({
    name,
    initialState: { data: { }, loading: null, errors: { } },
    extraReducers: {
      [fetch.pending]: (state, { meta }) => {
        state.loading = pendingRequests.add(meta);
      },
      [fetch.fulfilled]: (state, { payload, meta }) => {
        payload.forEach((item) => {
          state.data[item.id] = { ...state.data[item.id], ...item };
        });
        state.loading = pendingRequests.remove(meta);
      },
      [fetch.rejected]: (state, { meta: { requestId } }) => {
        state.errors[requestId] = 'Failed to fetch data';
        state.loading = pendingRequests.remove({ requestId });
      }
    }
  });
};
