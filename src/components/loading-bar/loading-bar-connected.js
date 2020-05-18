import React from 'react';
import { useSelector } from 'react-redux';
import LoadingBar from './loading-bar';

const LoadingBarConnected = () => {
  const displayLoadingBar = useSelector((state) => state.events.loading);
  return displayLoadingBar && <LoadingBar />;
};

export default LoadingBarConnected;
