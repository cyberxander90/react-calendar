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

export const createSliceAdapter = (name, {
  fetch, create, edit, remove, getExtraReducers = () => {}
}) => {
  const pendingRequests = new PendingRequests();

  const pendingAndRejected = [
    fetch,
    create,
    edit,
    remove
  ].reduce((acc, action) => ({
    ...acc,
    [action.pending]: (state, { meta }) => {
      state.loading = pendingRequests.add(meta);
    },
    [action.rejected]: (state, { meta: { requestId } }) => {
      state.errors[requestId] = 'Failed!';
      state.loading = pendingRequests.remove({ requestId });
    }
  }), {});

  const createAndEditFulfilled = [create, edit].reduce((acc, action) => ({
    ...acc,
    [action.fulfilled]: (state, { payload, meta }) => {
      state.data[payload.id] = { ...state.data[payload.id], ...payload };
      state.loading = pendingRequests.remove(meta);
    }
  }), {});

  return createSlice({
    name,
    initialState: { data: { }, loading: null, errors: { } },
    extraReducers: {
      ...pendingAndRejected,
      ...createAndEditFulfilled,
      [fetch.fulfilled]: (state, { payload, meta }) => {
        payload.forEach((item) => {
          state.data[item.id] = { ...state.data[item.id], ...item };
        });
        state.loading = pendingRequests.remove(meta);
      },
      [remove.fulfilled]: (state, { payload: { id }, meta }) => {
        delete state.data[id];
        state.loading = pendingRequests.remove(meta);
      },
      ...getExtraReducers(pendingRequests)
    }
  });
};
