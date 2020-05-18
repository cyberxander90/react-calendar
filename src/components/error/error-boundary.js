/* eslint-disable react/prop-types */
import React from 'react';
import Error from './error';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { state: { hasError } } = this;
    const { props: { children } } = this;

    if (hasError) {
      return (
        <Error />
      );
    }

    return children;
  }
}

export default ErrorBoundary;
