/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { hour24Options, minOptions } from 'src/services/dates';
import ValidationErrors from 'src/components/validation-errors';
import Select from 'react-select';
import classNames from 'classnames';

import styles from './timer-input.module.scss';
import './timer-input.scss';


const selectedHour = (values, hour) => values.find((item) => item.label === hour);
const selectedMinute = (values, minute) => values.find((item) => item.label === minute);

const TimerInput = ({
  text, hour, minute, onChangeTimer, displayValidation, errors, className
}) => {
  const isInvalid = displayValidation && errors.length > 0;
  const hourInputId = `${text}-hours`;
  const minsInputId = `${text}-mins`;

  return (
    <div className={classNames(className)}>
      <div className={classNames(styles.text, { [styles.invalid]: isInvalid })}>{text}</div>
      <div className={styles.timer}>
        <label htmlFor={hourInputId} className="hide">{hourInputId}</label>
        <Select
          inputId={hourInputId}
          className="react-timer-select"
          classNamePrefix="react-timer-select"
          options={hour24Options}
          defaultValue={selectedHour(hour24Options, hour)}
          onChange={({ value }) => onChangeTimer({ hour: value, minute })}
        />
        <div className={styles.points}> : </div>

        <label htmlFor={minsInputId} className="hide">{minsInputId}</label>
        <Select
          inputId={minsInputId}
          className="react-timer-select"
          classNamePrefix="react-timer-select"
          options={minOptions}
          defaultValue={selectedMinute(minOptions, minute)}
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
