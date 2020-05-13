import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ValidationErrors from 'src/components/validation-errors';

import { boolean } from '@storybook/addon-knobs';
import styles from './text-input.module.scss';

const TextInput = ({
  name, label, value, onChange, displayValidation, errors, className,
}) => {
  const inputEl = useRef(null);
  const [focus, setFocus] = useState(!boolean(value));
  const isInvalid = displayValidation && errors.length > 0;
  return (
    <div className={`${styles.text} ${className || ''} ${isInvalid ? styles.invalid : ''}`}>
      <label
        role="presentation"
        htmlFor={name}
        className={`${styles.label} ${focus ? styles.focus : ''}`}
        onClick={() => {
          setFocus(true);
          inputEl.current.focus();
        }}
        onKeyPress={() => {}}
      >
        {label}
      </label>
      <input
        ref={inputEl}
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className={styles.input}
        onFocus={() => setFocus(true)}
        onBlur={() => !value && setFocus(false)}
      />
      <ValidationErrors
        displayValidation={displayValidation}
        errors={errors}
      />
    </div>
  );
};


TextInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  displayValidation: PropTypes.bool,
  errors: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  className: PropTypes.string
};

TextInput.defaultProps = {
  name: '',
  label: '',
  value: '',
  displayValidation: false,
  errors: [],
  className: '',
  onChange: () => {}
};

export default TextInput;
