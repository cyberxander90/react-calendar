import React from 'react';
import PropTypes from 'prop-types';
import ValidationErrors from 'src/components/validation-errors';
import classNames from 'classnames';

import styles from './text-input.module.scss';

const TextInput = ({
  name, label, value, onChange, displayValidation, errors, className,
}) => {
  const isInvalid = displayValidation && errors.length > 0;
  return (
    <div className={classNames(styles.text, className, { [styles.invalid]: isInvalid })}>
      <label
        role="presentation"
        htmlFor={name}
        className={styles.label}
        onKeyPress={() => {}}
      >
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={styles.input}
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
