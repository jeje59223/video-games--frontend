export const addColorRating = (percentageRating: number): string => {
    let colorRating: string;
    if (percentageRating >= 85) {
        colorRating = 'percentVeryGood';
    } else if (percentageRating >= 70 && percentageRating < 85) {
        colorRating = 'percentGood';
    } else if (percentageRating < 70 && percentageRating >= 50) {
        colorRating = 'percentMedium';
    } else {
        colorRating = 'percentBad';
    }
    return colorRating;
}
