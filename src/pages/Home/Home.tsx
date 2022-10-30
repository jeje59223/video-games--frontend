import React from 'react';
import dayjs from 'dayjs';
import { HomeTemplate } from '../../components/templates/home-template';
// import { getBestGamesOfTheMonth } from '../../services/best-games-of-the-month/BestGamesOfTheMonth';
import { useBestGamesOfTheMonth } from '../../hooks/best-games-of-the-month/BestGamesOfTheMonth';

const Home = () => {
  const { bestGamesOfTheMonth, isFetching } = useBestGamesOfTheMonth();
  const month = dayjs().format('MMMM');

  return (
    <>
      {
        !isFetching
          ? <HomeTemplate
          bestGamesOfTheMonth={bestGamesOfTheMonth.results}
          month={month}
        /> : <p style={{ marginTop: '200px', textAlign: 'center', fontSize: '30px' }}>...loading</p>
      }
    </>
  );
};

export default Home;
