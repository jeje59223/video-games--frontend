export const generateClassName = (percentageRating: number): string => {
    let colorRating: string;
    if (percentageRating >= 85) {
        colorRating = 'percent-very-good';
    } else if (percentageRating >= 70 && percentageRating < 85) {
        colorRating = 'percent-good';
    } else if (percentageRating < 70 && percentageRating >= 50) {
        colorRating = 'percent-medium';
    } else {
        colorRating = 'percent-bad';
    }
    return colorRating;
}
