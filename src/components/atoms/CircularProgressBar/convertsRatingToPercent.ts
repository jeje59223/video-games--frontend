import { Game } from '../../../models/game';

type Ratio = number;
type Status = 'Bad' | 'Middle' | 'Good' | 'Very good';

export function convertsRatioToStatus(ratio: Ratio): Status {
  if (ratio >= 85) return 'Very good';
  if (ratio >= 70 && ratio < 85) return 'Good';
  if (ratio < 70 && ratio >= 50) return 'Middle';
  return 'Bad';
}

export function convertsRatingToPercent(rating: Game['rating']): Ratio {
  return Math.round(rating * 2 * 10 * 100) / 100;
}

export function convertsRatingToStatus(rating: Game['rating']): Status {
  const ratio = convertsRatingToPercent(rating);
  return convertsRatioToStatus(ratio);
}
