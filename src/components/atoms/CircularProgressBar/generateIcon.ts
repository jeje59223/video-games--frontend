export const generateIcon = (percentageRating: number): string => {
    if (percentageRating >= 85) {
        return 'https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-emoji-emoji-justicon-lineal-color-justicon-9.png';
    } else if (percentageRating >= 70 && percentageRating < 85) {
        return 'https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-emoji-emoji-justicon-lineal-color-justicon-2.png';
    } else if (percentageRating < 70 && percentageRating >= 50) {
        return 'https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-emoji-emoji-justicon-lineal-color-justicon-8.png';
    }
    return 'https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-emoji-emoji-justicon-lineal-color-justicon-24.png';
}
