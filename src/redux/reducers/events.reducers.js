import {
  fetchAsyncEvents, createAsyncEvent, editAsyncEvent, deleteAsyncEvent
} from 'src/redux/actions/events.actions';
import { createSliceAdapter } from 'src/services/redux/redux.service';

export default createSliceAdapter('event', {
  fetch: fetchAsyncEvents,
  create: createAsyncEvent,
  edit: editAsyncEvent,
  remove: deleteAsyncEvent
}).reducer;
