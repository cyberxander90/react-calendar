import moment from 'moment';
import { range } from 'src/services/tools-service';

export const getFirstDateOfTheWeek = ({ date, startOnMonday }) => {
  if (startOnMonday) {
    return date.day() === 0
      ? date.day(-6) // Monday of the previous week
      : date.day(1); // Monday of the current week
  }
  return date.day(0); // Sunday of the current week
};

export const getGridDates = ({ date, startOnMonday }) => {
  const startOfMonth = moment(date).startOf('month');
  const endOfMonth = moment(date).endOf('month');
  const firstDateOfTheGrid = getFirstDateOfTheWeek({ date: startOfMonth, startOnMonday });

  const result = [];
  const currentDate = firstDateOfTheGrid;
  while (currentDate <= endOfMonth) {
    const weekDates = range(7).map(() => {
      const clone = currentDate.clone();
      currentDate.add(1, 'day');
      return clone;
    });
    result.push(weekDates);
  }
  return result;
};

export const getWeekDates = ({ startOnMonday }) => {
  const result = range(7);
  if (startOnMonday) {
    result.splice(0, 1);
    result.push(0);
  }
  return result;
};
