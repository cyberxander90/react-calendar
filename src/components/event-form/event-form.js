import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import TextInput from 'src/components/text-input';
import TimerInput from 'src/components/timer-input';
import ColorPicker from 'src/components/pick-color';

import styles from './event-form.module.scss';

const getDateTime = ({ minute, hour }) => moment(`${parseInt(hour, 10)}:${parseInt(minute, 10)}`, 'HH:MM');

const validateRemainder = (remainder) => {
  const validations = [];
  if (remainder.length === 0) {
    validations.push('Required');
  } else if (remainder.length > 30) {
    validations.push('Max length is 30');
  }
  return validations;
};

const validateFromTimer = ({ minute, hour }) => (!minute || !hour
  ? ['Invalid time']
  : []);

const validateToTimer = (toTimer, fromTimer) => {
  const validations = [];
  if (!toTimer.minute || !toTimer.hour) {
    validations.push('Invalid time');
  } else if (getDateTime(fromTimer) > getDateTime(toTimer)) {
    validations.push('Invalid range');
  }
  return validations;
};

const EventForm = ({
  remainder: initRemainder,
  color: initColor,
  city: initCity,
  fromMinute: initFromMinute,
  fromHour: initFromHour,
  toMinute: initToMinute,
  toHour: initToHour,
  onSubmit,
  onCancel,
}) => {
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [remainder, setRemainder] = useState(initRemainder.trim());
  const [remainderErrors, setRemainderErrors] = useState(validateRemainder(remainder));
  const [color, setColor] = useState(initColor);
  const [city, setCity] = useState(initCity);
  const [fromTimer, setFromTimer] = useState({ minute: initFromMinute, hour: initFromHour });
  const [fromTimerErrors, setFromTimerErrors] = useState(validateFromTimer(fromTimer));
  const [toTimer, setToTimer] = useState({ minute: initToMinute, hour: initToHour });
  const [toTimerErrors, setToTimerErrors] = useState(validateToTimer(toTimer, fromTimer));

  const handleRemainderChange = ({ target: { value } }) => {
    const v = value.trim();
    setRemainder(v);
    setRemainderErrors(validateRemainder(v));
  };

  const handleTimerChange = (type) => (timer) => {
    if (type === 'from') {
      setFromTimer(timer);
      setFromTimerErrors(validateFromTimer(timer));
      setToTimerErrors(validateToTimer(toTimer, timer));
    } else {
      setToTimer(timer);
      setFromTimerErrors(validateFromTimer(fromTimer));
      setToTimerErrors(validateToTimer(timer, fromTimer));
    }
  };

  const onFormSubmit = (event) => {
    setFormSubmitted(true);
    event.preventDefault();
    onSubmit({
      remainder,
      color,
      city,
      fromTimer,
      toTimer
    });
  };

  return (
    <form
      className={styles.form}
      onSubmit={onFormSubmit}
    >
      <TextInput
        className={styles.remainder}
        label="Remainder"
        name="remainder"
        value={remainder}
        onChange={handleRemainderChange}
        displayValidation={isFormSubmitted}
        errors={remainderErrors}
      />
      <TimerInput
        text="From"
        className={styles.from}
        minute={fromTimer.minute}
        hour={fromTimer.hour}
        onChangeTimer={handleTimerChange('from')}
        displayValidation={isFormSubmitted}
        errors={fromTimerErrors}
      />
      <TimerInput
        className={styles.to}
        text="To"
        minute={toTimer.minute}
        hour={toTimer.hour}
        onChangeTimer={handleTimerChange('to')}
        displayValidation={isFormSubmitted}
        errors={toTimerErrors}
      />

      <TextInput
        className={styles.city}
        label="City"
        name="city"
        value={city}
        onChange={({ target: { value } }) => setCity(value)}
      />
      <ColorPicker
        className={styles.color}
        color={color}
        onChange={setColor}
      />

      <button type="button" onClick={onCancel}>
        Cancel
      </button>
      <button type="submit">
        Save
      </button>
    </form>
  );
};


EventForm.propTypes = {
  remainder: PropTypes.string,
  color: PropTypes.string,
  fromMinute: PropTypes.string,
  fromHour: PropTypes.string,
  toMinute: PropTypes.string,
  toHour: PropTypes.string,
  city: PropTypes.string,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func
};

EventForm.defaultProps = {
  remainder: 'hi',
  color: '',
  fromMinute: '01',
  fromHour: '01',
  toMinute: '01',
  toHour: '01',
  city: '',
  onSubmit: () => {},
  onCancel: () => {}
};

export default EventForm;
