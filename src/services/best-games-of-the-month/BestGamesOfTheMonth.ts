import { BEST_GAMES_OF_THE_MONTH } from '../route';

export const getBestGamesOfTheMonth = async () => {
  const data = await fetch(BEST_GAMES_OF_THE_MONTH, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (data.ok) return data.json();
  throw new Error(data.statusText);
};
