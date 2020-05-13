import moment from 'moment';

const getDateTime = ({ minute, hour }) => moment(`${hour}:${minute}`, 'HH:mm');

export const validateRemainder = (remainder) => {
  const validations = [];
  if (remainder.length === 0) {
    validations.push('Required');
  } else if (remainder.length > 30) {
    validations.push('Max length is 30');
  }
  return validations;
};

export const validateStartTime = ({ minute, hour }) => (!minute || !hour
  ? ['Invalid time']
  : []);

export const validateEndTime = (startTime, endTime) => {
  const validations = [];
  if (!startTime.minute || !startTime.hour) {
    validations.push('Invalid time');
  } else if (getDateTime(startTime) > getDateTime(endTime)) {
    validations.push('Invalid range');
  }
  return validations;
};
