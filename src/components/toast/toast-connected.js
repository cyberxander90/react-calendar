import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeToast } from 'src/redux/actions/toast';
import Toast from './toast';

const ToastConnected = () => {
  const dispatch = useDispatch();
  const toasts = useSelector((state) => state.toasts);
  return (
    <Toast
      toasts={toasts}
      onRemoveToast={(id) => dispatch(removeToast(id))}
    />
  );
};

ToastConnected.propTypes = {};

ToastConnected.defaultProps = {};

export default ToastConnected;
