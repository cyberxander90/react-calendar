import moment from 'moment';
import { range } from 'src/services/tools';

export const YYYY_MM_DD = 'YYYY-MM-DD';
export const HH_MM = 'HH:mm';

const nameOfWeekDay = [
  ['Sunday', 'Sun'],
  ['Monday', 'Mon'],
  ['Tuesday', 'Tue'],
  ['Wednesday', 'Wed'],
  ['Thursday', 'Thu'],
  ['Friday', 'Fri'],
  ['Saturday', 'Sat']
];
export const geNameOfWeekDay = (day) => nameOfWeekDay[day];

export const getFirstDateOfTheWeek = ({ date, startOnMonday }) => {
  const mDate = moment(date);
  if (startOnMonday) {
    return mDate.day() === 0
      ? mDate.day(-6) // Monday of the previous week
      : mDate.day(1); // Monday of the current week
  }
  return mDate.day(0); // Sunday of the current week
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

export const getDaysOfWeek = ({ startOnMonday }) => {
  const result = range(7);
  if (startOnMonday) {
    result.splice(0, 1);
    result.push(0);
  }
  return result;
};

const getOptions = (n, startOn = 0) => range(n, startOn)
  .map((id) => {
    const value = `${id < 10 ? '0' : ''}${id}`;
    return { value, label: value };
  });

export const hour24Options = getOptions(24);
export const hour12Options = getOptions(13, 1);
export const minOptions = getOptions(60);
