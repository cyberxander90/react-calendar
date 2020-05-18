import React from 'react';
import classNames from 'classnames';

import styles from './loading-bar.module.scss';

const LoadingBar = () => (
  <div className={styles.slider}>
    <div className={styles.line} />
    <div className={classNames(styles.subline, styles.inc)} />
    <div className={classNames(styles.subline, styles.dec)} />
  </div>
);

export default LoadingBar;
