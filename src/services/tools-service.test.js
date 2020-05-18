import { range } from './tools-service';

describe('Tools Service', () => {
  describe('range', () => {
    it('create correct ranges', () => {
      expect(range(3)).toEqual([0, 1, 2]);
      expect(range(5, 2)).toEqual([2, 3, 4]);
      expect(range(0)).toEqual([]);
    });
  });
});
