import moment from 'moment';
import {
  geNameOfWeekDay, getFirstDateOfTheWeek, YYYY_MM_DD, getGridDates, getDaysOfWeek
} from '.';

describe('dates service', () => {
  describe('geNameOfWeekDay', () => {
    it('returns correctly', () => {
      expect(geNameOfWeekDay(0)).toEqual(['Sunday', 'Sun']);
      expect(geNameOfWeekDay(6)).toEqual(['Saturday', 'Sat']);
    });
  });

  describe('getFirstDateOfTheWeek', () => {
    it('returns correctly', () => {
      const date = moment('2020-05-01');

      expect(getFirstDateOfTheWeek({ date: date.clone(), startOnMonday: false })
        .format(YYYY_MM_DD)).toEqual('2020-04-26');
      expect(getFirstDateOfTheWeek({ date: date.clone(), startOnMonday: true })
        .format(YYYY_MM_DD)).toEqual('2020-04-27');
    });
  });

  describe('getGridDates', () => {
    it('returns correctly', () => {
      const date = moment('2020-05-01');
      const mapWeekItems = (weekItems) => weekItems.map((item) => item.format(YYYY_MM_DD));

      expect(getGridDates({ date: date.clone(), startOnMonday: false }).map(mapWeekItems)).toEqual([
        ['2020-04-26', '2020-04-27', '2020-04-28', '2020-04-29', '2020-04-30', '2020-05-01', '2020-05-02'],
        ['2020-05-03', '2020-05-04', '2020-05-05', '2020-05-06', '2020-05-07', '2020-05-08', '2020-05-09'],
        ['2020-05-10', '2020-05-11', '2020-05-12', '2020-05-13', '2020-05-14', '2020-05-15', '2020-05-16'],
        ['2020-05-17', '2020-05-18', '2020-05-19', '2020-05-20', '2020-05-21', '2020-05-22', '2020-05-23'],
        ['2020-05-24', '2020-05-25', '2020-05-26', '2020-05-27', '2020-05-28', '2020-05-29', '2020-05-30'],
        ['2020-05-31', '2020-06-01', '2020-06-02', '2020-06-03', '2020-06-04', '2020-06-05', '2020-06-06'],
      ]);
      expect(getGridDates({ date: date.clone(), startOnMonday: true }).map(mapWeekItems)).toEqual([
        ['2020-04-27', '2020-04-28', '2020-04-29', '2020-04-30', '2020-05-01', '2020-05-02', '2020-05-03'],
        ['2020-05-04', '2020-05-05', '2020-05-06', '2020-05-07', '2020-05-08', '2020-05-09', '2020-05-10'],
        ['2020-05-11', '2020-05-12', '2020-05-13', '2020-05-14', '2020-05-15', '2020-05-16', '2020-05-17'],
        ['2020-05-18', '2020-05-19', '2020-05-20', '2020-05-21', '2020-05-22', '2020-05-23', '2020-05-24'],
        ['2020-05-25', '2020-05-26', '2020-05-27', '2020-05-28', '2020-05-29', '2020-05-30', '2020-05-31']
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
