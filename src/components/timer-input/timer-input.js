import React from 'react';
import PropTypes from 'prop-types';
import { range } from 'src/services/tools-service';
import ValidationErrors from 'src/components/validation-errors';
import Select from 'react-select';

import styles from './timer-input.module.scss';
import './timer-input.scss';

const getOptions = (n) => range(n)
  .map((id) => {
    const value = `${id < 10 ? '0' : ''}${id}`;
    return { value, label: value };
  });

const hours = getOptions(24);
const minutes = getOptions(60);

const selectedHour = (values, hour) => values.find((item) => item.label === hour);
const selectedMinute = (values, minute) => values.find((item) => item.label === minute);

const TimerInput = ({
  text, hour, minute, onChangeTimer, displayValidation, errors, className
}) => {
  const isInvalid = displayValidation && errors.length > 0;
  return (
    <div className={`${className || ''}`}>
      <div className={`${styles.text} ${isInvalid ? styles.invalid : ''}`}>{text}</div>
      <div className={styles.timer}>
        <Select
          className="react-timer-select"
          classNamePrefix="react-timer-select"
          options={hours}
          defaultValue={selectedHour(hours, hour)}
          onChange={({ value }) => onChangeTimer({ hour: value, minute })}
        />
        <div className={styles.points}> : </div>
        <Select
          className="react-timer-select"
          classNamePrefix="react-timer-select"
          options={minutes}
          defaultValue={selectedMinute(minutes, minute)}
          onChange={({ value }) => onChangeTimer({ minute: value, hour })}
        />
      </div>
      <ValidationErrors
        displayValidation={displayValidation}
        errors={errors}
      />
    </div>
  );
};

TimerInput.propTypes = {
  text: PropTypes.string,
  hour: PropTypes.string,
  minute: PropTypes.string,
  displayValidation: PropTypes.bool,
  errors: PropTypes.arrayOf(PropTypes.string),
  onChangeTimer: PropTypes.func,
  className: PropTypes.string
};

TimerInput.defaultProps = {
  text: '',
  hour: '10',
  minute: '00',
  displayValidation: false,
  errors: [],
  className: '',
  onChangeTimer: () => {}
};

export default TimerInput;
