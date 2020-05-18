/* eslint-disable implicit-arrow-linebreak */
import { createReducer } from '@reduxjs/toolkit';
import { addToast, removeToast } from 'src/redux/actions/toast';

const toastReducers = createReducer([], {
  [addToast]: (state, { payload }) => {
    state.push(payload);
  },
  [removeToast]: (state, { payload }) => state.filter(({ id }) => id !== payload)
});

export default toastReducers;
