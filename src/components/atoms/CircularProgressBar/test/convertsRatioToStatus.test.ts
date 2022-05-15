import { convertsRatioToStatus } from '../convertsRatingToPercent';

describe('convertsRatioToStatus should return status', () => {
  test('should return status Very good', () => {
    const status = convertsRatioToStatus(87);

    expect(status).toBe('Very good');
  });

  test('should return status Good', () => {
    const status = convertsRatioToStatus(75);

    expect(status).toBe('Good');
  });

  test('should return status Middle', () => {
    const status = convertsRatioToStatus(55);

    expect(status).toBe('Middle');
  });

  test('should return status Bad', () => {
    const status = convertsRatioToStatus(35);

    expect(status).toBe('Bad');
  });
});
