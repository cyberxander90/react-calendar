import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextInput from 'src/components/text-input';
import TimerInput from 'src/components/timer-input';
import ColorPicker from 'src/components/pick-color';
import {
  validateRemainder,
  validateStartTime,
  validateEndTime
} from './validations';

import styles from './event-form.module.scss';

const EventForm = ({
  remainder: initRemainder,
  color: initColor,
  city: initCity,
  startMinute: initStartMinute,
  startHour: initStartHour,
  endMinute: initEndMinute,
  endHour: initEndHour,
  onSubmit,
  onCancel,
}) => {
  // remainder
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [remainder, setRemainder] = useState(initRemainder.trim());
  const [remainderErrors, setRemainderErrors] = useState(validateRemainder(remainder));

  // city / color
  const [color, setColor] = useState(initColor);
  const [city, setCity] = useState(initCity);

  // start time
  const [startTime, setStartTime] = useState({ minute: initStartMinute, hour: initStartHour });
  const [startTimeErrors, setStartTimeErrors] = useState(validateStartTime(startTime));

  // end time
  const [endTime, setEndTime] = useState({ minute: initEndMinute, hour: initEndHour });
  const [endTimeErrors, setEndTimeErrors] = useState(validateEndTime(endTime, startTime));

  // handle remainder change
  const handleRemainderChange = ({ target: { value } }) => {
    const v = value.trim();
    setRemainder(v);
    setRemainderErrors(validateRemainder(v));
  };

  // handle time change
  const handleTimeChange = (type) => (timer) => {
    if (type === 'from') {
      setStartTime(timer);
      setStartTimeErrors(validateStartTime(timer));
      setEndTimeErrors(validateEndTime(endTime, timer));
    } else {
      setEndTime(timer);
      setStartTimeErrors(validateStartTime(startTime));
      setEndTimeErrors(validateEndTime(timer, startTime));
    }
  };

  const isFormInvalid = () => [
    remainderErrors,
    startTimeErrors,
    endTimeErrors
  ].some((item) => item.length);

  const onFormSubmit = (event) => {
    setFormSubmitted(true);
    event.preventDefault();
    if (isFormInvalid()) {
      return;
    }
    onSubmit({
      remainder,
      color,
      city,
      startTime,
      endTime
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
        minute={startTime.minute}
        hour={startTime.hour}
        onChangeTimer={handleTimeChange('from')}
        displayValidation={isFormSubmitted}
        errors={startTimeErrors}
      />
      <TimerInput
        className={styles.to}
        text="To"
        minute={endTime.minute}
        hour={endTime.hour}
        onChangeTimer={handleTimeChange('to')}
        displayValidation={isFormSubmitted}
        errors={endTimeErrors}
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
  startMinute: PropTypes.string,
  startHour: PropTypes.string,
  endMinute: PropTypes.string,
  endHour: PropTypes.string,
  city: PropTypes.string,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func
};

EventForm.defaultProps = {
  remainder: '',
  color: '',
  startMinute: '01',
  startHour: '01',
  endMinute: '01',
  endHour: '01',
  city: '',
  onSubmit: () => {},
  onCancel: () => {}
};

export default EventForm;
