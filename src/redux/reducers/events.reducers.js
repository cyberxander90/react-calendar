/* eslint-disable no-param-reassign */
import {
  fetchAsyncEvents, createAsyncEvent, editAsyncEvent, deleteAsyncEvent, deleteAllAsyncEvent
} from 'src/redux/actions/events.actions';
import { createSliceAdapter } from 'src/services/redux/redux.service';

export default createSliceAdapter('event', {
  fetch: fetchAsyncEvents,
  create: createAsyncEvent,
  edit: editAsyncEvent,
  remove: deleteAsyncEvent,
  getExtraReducers: (pendingRequests) => ({
    [deleteAllAsyncEvent.pending]: (state, { meta }) => {
      state.loading = pendingRequests.add(meta);
    },
    [deleteAllAsyncEvent.rejected]: (state, { meta: { requestId } }) => {
      state.errors[requestId] = 'Failed!';
      state.loading = pendingRequests.remove({ requestId });
    },
    [deleteAllAsyncEvent.fulfilled]: (state, { payload: { id }, meta }) => {
      Object.keys(state.data).forEach((key) => {
        if (state.data[key].startDate.startsWith(id)) {
          delete state.data[key];
        }
      });
      state.loading = pendingRequests.remove(meta);
    }
  })
}).reducer;
