import React, { useState } from 'react';
import PropTypes from 'src/services/prop-types';
import TextInput from 'src/components/text-input';
import TimerInput from 'src/components/timer-input';
import ColorPicker from 'src/components/pick-color';
import moment from 'moment';
import DayPicker from 'react-day-picker';
import Weather from 'src/components/weather';
import { CalendarIcon } from 'src/components/icons';
import classNames from 'classnames';
import { YYYY_MM_DD } from 'src/services/dates';
import 'react-day-picker/lib/style.css';
import Button from 'src/components/button';
import styles from './event-form.module.scss';
import {
  validateRemainder,
  validateStartTime,
  validateEndTime
} from './validations';

const EventForm = ({
  date: initDate,
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

  // start / end time time
  const [startTime, setStartTime] = useState({ minute: initStartMinute, hour: initStartHour });
  const [startTimeErrors, setStartTimeErrors] = useState(validateStartTime(startTime));
  const [endTime, setEndTime] = useState({ minute: initEndMinute, hour: initEndHour });
  const [endTimeErrors, setEndTimeErrors] = useState(validateEndTime(startTime, endTime));

  // date picker
  const [date, setDate] = useState(moment(initDate).toDate());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const dateStr = moment(date).format(YYYY_MM_DD);

  // handle remainder change
  const handleRemainderChange = ({ target: { value } }) => {
    setRemainder(value);
    setRemainderErrors(validateRemainder(value.trim()));
  };

  // handle time change
  const handleTimeChange = (type) => (currentTime) => {
    if (type === 'from') {
      setStartTime(currentTime);
      setStartTimeErrors(validateStartTime(currentTime));
      setEndTimeErrors(validateEndTime(currentTime, endTime));
    } else {
      setEndTime(currentTime);
      setStartTimeErrors(validateStartTime(startTime));
      setEndTimeErrors(validateEndTime(startTime, currentTime));
    }
  };

  // handle form submission
  const onFormSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    const isFormInvalid = [
      remainderErrors,
      startTimeErrors,
      endTimeErrors
    ].some((item) => item.length);
    if (isFormInvalid) {
      return;
    }

    onSubmit({
      remainder,
      color,
      city,
      startDate: `${dateStr} ${startTime.hour}:${startTime.minute}`,
      endDate: `${dateStr} ${endTime.hour}:${endTime.minute}`,
    });
  };

  return (
    <form
      className={styles.form}
      onSubmit={onFormSubmit}
    >
      <TextInput
        className={styles.input}
        label="Remainder"
        name="remainder"
        value={remainder}
        onChange={handleRemainderChange}
        displayValidation={isFormSubmitted}
        errors={remainderErrors}
      />
      <div className={classNames(styles.input, styles.timers)}>
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
          text="To"
          minute={endTime.minute}
          hour={endTime.hour}
          onChangeTimer={handleTimeChange('to')}
          displayValidation={isFormSubmitted}
          errors={endTimeErrors}
        />
      </div>

      <div
        role="button"
        onClick={() => setShowDatePicker(!showDatePicker)}
        onKeyPress={() => setShowDatePicker(!showDatePicker)}
        className={classNames(styles.input, styles.date, 'pointer')}
        tabIndex={0}
      >
        <CalendarIcon />
        {' '}
        {dateStr}
      </div>

      {showDatePicker && (
        <DayPicker
          month={date}
          onDayClick={(value) => {
            setDate(moment(value).toDate());
            setShowDatePicker(!showDatePicker);
          }}
        />
      )}

      <TextInput
        className={styles.input}
        label="City"
        name="city"
        value={city}
        onChange={({ target: { value } }) => setCity(value)}
      />

      <Weather
        className={styles.weather}
        city={city}
        date={dateStr}
        ms={600}
      />

      <ColorPicker
        className={styles.color}
        color={color}
        onChange={setColor}
      />

      <div className={styles.actions}>
        <Button type="button" onClick={onCancel} data-tiny-popover>
          Cancel
        </Button>
        <Button type="submit" primary>
          Save
        </Button>
      </div>
    </form>
  );
};


EventForm.propTypes = {
  date: PropTypes.date.isRequired,
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
