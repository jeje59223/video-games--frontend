import { convertsRatioToStatus } from './convertsRatingToPercent';

export const generateRatingColor = (ratio: number): string => {
  if (convertsRatioToStatus(ratio) === 'Very good') {
    return '#FFD700';
  } if (convertsRatioToStatus(ratio) === 'Good') {
    return '#4dd4ac';
  } if (convertsRatioToStatus(ratio) === 'Middle') {
    return '#fd7e14';
  }
  return '#dc3545';
};
