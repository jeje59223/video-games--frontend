import { useQuery } from 'react-query';
import { getBestGamesOfTheMonth } from '../../services/best-games-of-the-month/BestGamesOfTheMonth';
import { A_HOUR } from '../../services/utils/date';

export const useBestGamesOfTheMonth = () => {
  const { data: bestGamesOfTheMonth, isFetching } = useQuery('bestGamesOfTheMonth', getBestGamesOfTheMonth, {
    onError: (e: string) => {
      console.error(e);
    },
    staleTime: 3 * A_HOUR,
  });

  return { bestGamesOfTheMonth: bestGamesOfTheMonth || [], isFetching };
};
