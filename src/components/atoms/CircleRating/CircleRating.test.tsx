import React from 'react';
import { generateClassName } from './generateClassName';
import { convertsRatingToPercent } from "./convertsRatingToPercent";

describe('<CircleRating>', () => {
    test('should return percentBad when a rating is less than 50', function () {
        const colorRating = generateClassName(40);
        expect(colorRating).toEqual('percent-bad');
    });
    test('should return percentMedium when a rating is less than 70 and greater than or equal to 50', function () {
        const colorRating = generateClassName(60);
        expect(colorRating).toEqual('percent-medium');
    });
    test('should return percentGood when a rating is less than 85 and greater than or equal to 70', function () {
        const colorRating = generateClassName(75);
        expect(colorRating).toEqual('percent-good');
    });
    test('should return percentGood when a rating is greater or equal than 85', function () {
        const colorRating = generateClassName(87);
        expect(colorRating).toEqual('percent-very-good');
    });
    test('should return a rating to percent', () => {
        const convertsRating = convertsRatingToPercent(1);
        expect(convertsRating).toEqual(20);
    })
});
