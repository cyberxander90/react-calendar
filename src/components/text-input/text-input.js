import React from 'react';
import PropTypes from 'prop-types';

import styles from './text-input.module.scss';

const TextInput = ({
  name, label, value, onChange, isInvalid, validations
}) => (
  <div className={`${styles.text} ${isInvalid ? styles.invalid : ''}`}>
    <label htmlFor={name} className={styles.label}>{label}</label>
    <input type="text" name={name} value={value} onChange={onChange} className={styles.input} />
    {isInvalid && validations.length > 0 && (
      <div>
        {validations.map((validation) => (
          <p key={validation} className={styles.error}>{validation}</p>
        ))}
      </div>
    )}
  </div>
);


TextInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  isInvalid: PropTypes.bool,
  validations: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

TextInput.defaultProps = {
  name: '',
  label: '',
  value: '',
  isInvalid: false,
  validations: [],
  onChange: () => {}
};

export default TextInput;
