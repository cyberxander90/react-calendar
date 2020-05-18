/* eslint-disable no-param-reassign */
import {
  fetchAsyncEvents, createAsyncEvent, editAsyncEvent, deleteAsyncEvent, deleteRangeAsyncEvent
} from 'src/redux/actions/events';
import { createSliceAdapter } from 'src/services/redux';

export default createSliceAdapter('event', {
  fetch: fetchAsyncEvents,
  create: createAsyncEvent,
  edit: editAsyncEvent,
  remove: deleteAsyncEvent,
  getExtraReducers: (pendingRequests) => ({
    [deleteRangeAsyncEvent.pending]: (state, { meta }) => {
      state.loading = pendingRequests.add(meta);
    },
    [deleteRangeAsyncEvent.rejected]: (state, { meta: { requestId } }) => {
      state.errors[requestId] = 'Failed!';
      state.loading = pendingRequests.remove({ requestId });
    },
    [deleteRangeAsyncEvent.fulfilled]: (state, { payload: { id }, meta }) => {
      Object.keys(state.data).forEach((key) => {
        if (state.data[key].startDate.startsWith(id)) {
          delete state.data[key];
        }
      });
      state.loading = pendingRequests.remove(meta);
    }
  })
}).reducer;
