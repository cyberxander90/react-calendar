import { fetchAsyncEvents } from 'src/redux/actions/events.actions';
import { createSliceAdapter } from 'src/services/redux/redux.service';

export default createSliceAdapter('event', {
  fetch: fetchAsyncEvents
}).reducer;
