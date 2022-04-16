export function convertsRatingToPercent(rating: number): number {
    rating = rating * 2 * 10;
    return Math.round(rating * 100) / 100;
}
