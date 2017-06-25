import formattedDate from './formattedDate';

describe('utils', () => {
  describe('formmatedDate', () => {
    const dateString = "02-21-2017";
    const date = new Date(dateString);

    it('returns the correct formatted date', () => {
      const formatted = formattedDate(dateString);
      const expectedDate = date.toDateString();

      expect(formatted).toEqual(expectedDate);
    });
  });
});
