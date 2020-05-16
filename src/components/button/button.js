/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './button.module.scss';

const Button = ({
  children, primary, className, ...otherProps
}) => (
  <button
    className={classNames({
      className,
      [styles.primary]: primary,
      [styles.secondary]: !primary
    })}
    {...otherProps}
  >
    {children}
  </button>
);

Button.propTypes = {
  primary: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};

Button.defaultProps = {
  children: null,
  primary: false,
  className: ''
};

export default Button;
