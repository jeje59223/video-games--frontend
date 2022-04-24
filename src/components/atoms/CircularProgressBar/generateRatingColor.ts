export const generateRatingColor = (percentageRating: number): string => {
    if (percentageRating >= 85) {
        return '#FFD700';
    } else if (percentageRating >= 70 && percentageRating < 85) {
        return '#4dd4ac';
    } else if (percentageRating < 70 && percentageRating >= 50) {
        return '#fd7e14';
    }
    return '#dc3545';
};

