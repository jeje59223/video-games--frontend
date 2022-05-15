import { convertsRatioToStatus } from './convertsRatingToPercent';

export const generateRatingColor = (ratio: number): string => {
  const status = convertsRatioToStatus(ratio);
  if (status === 'Very good') {
    return '#FFD700';
  } if (status === 'Good') {
    return '#4dd4ac';
  } if (status === 'Middle') {
    return '#fd7e14';
  }
  return '#dc3545';
};
