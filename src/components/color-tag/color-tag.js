import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './color-tag.module.scss';

const ColorTag = ({ color, className }) => (
  <span
    className={classNames(styles.color, className)}
    style={color ? { background: color } : {}}
  />
);

ColorTag.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string
};

ColorTag.defaultProps = {
  color: '',
  className: ''
};

export default ColorTag;
