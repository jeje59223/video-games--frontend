import React from 'react';
import { addColorRating } from './addColorRating';
import { convertsRatingToPercent } from "./convertsRatingToPercent";

describe('<CircleRating>', () => {
    test('should return percentBad when a rating is less than 50', function () {
        const colorRating = addColorRating(40);
        expect(colorRating).toEqual('percentBad');
    });
    test('should return percentMedium when a rating is less than 70 and greater than or equal to 50', function () {
        const colorRating = addColorRating(60);
        expect(colorRating).toEqual('percentMedium');
    });
    test('should return percentGood when a rating is less than 85 and greater than or equal to 70', function () {
        const colorRating = addColorRating(75);
        expect(colorRating).toEqual('percentGood');
    });
    test('should return percentGood when a rating is greater or equal than 85', function () {
        const colorRating = addColorRating(87);
        expect(colorRating).toEqual('percentVeryGood');
    });
    test('should return a rating to percent', () => {
        const convertsRating = convertsRatingToPercent(1);
        expect(convertsRating).toEqual(20);
    })
});
