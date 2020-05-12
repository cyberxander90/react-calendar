import React from 'react';
import PropTypes from 'prop-types';

import styles from './validation-errors.module.scss';

const ValidationErrors = ({
  displayValidation, errors
}) => displayValidation && errors.length > 0 && (
  <div>
    {errors.map((error) => (
      <p key={error} className={styles.error}>{error}</p>
    ))}
  </div>
);

ValidationErrors.propTypes = {
  displayValidation: PropTypes.bool,
  errors: PropTypes.arrayOf(PropTypes.string)
};

ValidationErrors.defaultProps = {
  displayValidation: false,
  errors: []
};

export default ValidationErrors;
