import { convertsRatioToStatus } from './convertsRatingToPercent';
import {
  gold, red, green, orange,
} from '../../../colors/colors';

export const generateRatingColor = (ratio: number): string => {
  const status = convertsRatioToStatus(ratio);
  if (status === 'Very good') {
    return gold;
  } if (status === 'Good') {
    return green;
  } if (status === 'Middle') {
    return orange;
  }
  return red;
};
