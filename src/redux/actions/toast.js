import uuid from 'uuid';
import { createAction } from '@reduxjs/toolkit';

export const removeToast = createAction('toast/remove');

export const addToast = createAction('toast/add', (text, { timeout, dispatch }) => {
  const toast = {
    text,
    id: uuid()
  };
  setTimeout(() => dispatch(removeToast(toast.id)), timeout);
  return { payload: toast };
});

export const withToast = (promise, { dispatch, text = 'Failed!', timeout = 5000 }) => promise
  .then((response) => response)
  .catch((error) => {
    dispatch(addToast(text, { timeout, dispatch }));
    Promise.reject(error);
  });
