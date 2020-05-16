import moment from 'moment';
import { getFirstDateOfTheWeek, getGridDates, getDaysOfWeek } from './grid-service';

const FORMAT = 'YYYY-MM-DD';

describe('Grid Service', () => {
  describe('getFirstDateOfTheWeek', () => {
    it('returns correctly', () => {
      const date = moment('2020-05-01');

      expect(getFirstDateOfTheWeek({ date: date.clone(), startOnMonday: false }).format(FORMAT)).toEqual('2020-04-26');
      expect(getFirstDateOfTheWeek({ date: date.clone(), startOnMonday: true }).format(FORMAT)).toEqual('2020-04-27');
    });
  });

  describe('getGridDates', () => {
    it('returns correctly', () => {
      const date = moment('2020-05-01');
      const mapWeekItems = (weekItems) => weekItems.map((item) => item.format(FORMAT));

      expect(getGridDates({ date: date.clone(), startOnMonday: false }).map(mapWeekItems)).toEqual([
        ['2020-04-26', '2020-04-27', '2020-04-28', '2020-04-29', '2020-04-30', '2020-05-01', '2020-05-02'],
        ['03', '04', '05', '06', '07', '08', '09'].map((day) => `2020-05-${day}`),
        ['10', '11', '12', '13', '14', '15', '16'].map((day) => `2020-05-${day}`),
        ['17', '18', '19', '20', '21', '22', '23'].map((day) => `2020-05-${day}`),
        ['24', '25', '26', '27', '28', '29', '30'].map((day) => `2020-05-${day}`),
        ['2020-05-31', '2020-06-01', '2020-06-02', '2020-06-03', '2020-06-04', '2020-06-05', '2020-06-06'],
      ]);
      expect(getGridDates({ date: date.clone(), startOnMonday: true }).map(mapWeekItems)).toEqual([
        ['2020-04-27', '2020-04-28', '2020-04-29', '2020-04-30', '2020-05-01', '2020-05-02', '2020-05-03'],
        ['04', '05', '06', '07', '08', '09', '10'].map((day) => `2020-05-${day}`),
        ['11', '12', '13', '14', '15', '16', '17'].map((day) => `2020-05-${day}`),
        ['18', '19', '20', '21', '22', '23', '24'].map((day) => `2020-05-${day}`),
        ['25', '26', '27', '28', '29', '30', '31'].map((day) => `2020-05-${day}`)
      ]);
    });
  });

  describe('getDaysOfWeek', () => {
    it('returns correctly', () => {
      expect(getDaysOfWeek({ startOnMonday: false })).toEqual([0, 1, 2, 3, 4, 5, 6]);
      expect(getDaysOfWeek({ startOnMonday: true })).toEqual([1, 2, 3, 4, 5, 6, 0]);
    });
  });
});
