import React from 'react';
import PropTypes from 'prop-types';
import { range } from 'src/services/tools-service';
import Select from 'react-select';

import styles from './timer-input.module.scss';
import './timer-input.scss';

const getOptions = (n) => range(n).map((id) => ({
  value: id.toString(),
  label: `${id < 10 ? '0' : ''}${id}`
}));

const hours = getOptions(24);
const minutes = getOptions(60);

const selectedHour = (values, hour) => values.find((item) => item.label === hour);
const selectedMinute = (values, minute) => values.find((item) => item.label === minute);

const TimerInput = ({
  text, hour, minute, onChangeTimer
}) => (
  <div className={styles.timer}>
    <div className={styles.text}>{text}</div>
    <Select
      className="react-timer-select"
      classNamePrefix="react-timer-select"
      options={hours}
      defaultValue={selectedHour(hours, hour)}
      onChange={(value) => onChangeTimer({ hour: value })}
    />
    <div className={styles.points}> : </div>
    <Select
      className="react-timer-select"
      classNamePrefix="react-timer-select"
      options={minutes}
      defaultValue={selectedMinute(minutes, minute)}
      onChange={(value) => onChangeTimer({ minute: value })}
    />
  </div>
);

TimerInput.propTypes = {
  text: PropTypes.string,
  hour: PropTypes.string,
  minute: PropTypes.string,
  onChangeTimer: PropTypes.func.isRequired
};

TimerInput.defaultProps = {
  text: '',
  hour: '10',
  minute: '00',
};

export default TimerInput;
