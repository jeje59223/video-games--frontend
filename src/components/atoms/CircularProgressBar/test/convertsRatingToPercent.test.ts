import { convertsRatingToPercent } from "../convertsRatingToPercent";

describe('convertsRatingToPercent test', () => {
    test('should return the rating as a percentage', () => {
        const convertsRating = convertsRatingToPercent(1);
        expect(convertsRating).toEqual(20);
    })
})
