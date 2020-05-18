import React from 'react';

import styles from './error.module.scss';

const Error = () => (
  <div className={styles.error}>
    <h1>Oups!!</h1>
    <p>Looks like there was a problem.</p>
    <img
      className={styles.img}
      src={`${process.env.PUBLIC_URL}/imgs/error.jpg`}
      alt="error"
    />
    <p><a href="/">Please try again.</a></p>
  </div>
);

export default Error;
