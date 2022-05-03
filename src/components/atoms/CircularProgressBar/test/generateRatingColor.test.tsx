import { generateRatingColor } from '../generateRatingColor';

describe('<CircleRating>', () => {
  test('should return percentBad when a rating is less than 50', () => {
    const colorRating = generateRatingColor(40);
    expect(colorRating).toEqual('#dc3545');
  });
  test('should return percentMedium when a rating is less than 70 and greater than or equal to 50', () => {
    const colorRating = generateRatingColor(60);
    expect(colorRating).toEqual('#fd7e14');
  });
  test('should return percentGood when a rating is less than 85 and greater than or equal to 70', () => {
    const colorRating = generateRatingColor(75);
    expect(colorRating).toEqual('#4dd4ac');
  });
  test('should return percentGood when a rating is greater or equal than 85', () => {
    const colorRating = generateRatingColor(87);
    expect(colorRating).toEqual('#FFD700');
  });
});
