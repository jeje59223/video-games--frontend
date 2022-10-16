import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { HomeTemplate } from '../../components/templates/home-template';

const Home = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [games, setGames] = useState([]);

  const getGames = async () => {
    const data = await fetch('http://localhost:8080/games/best-games-of-the-month', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS',
      },
    });
    return data.json();
  };

  useEffect(() => {
    const fetchGames = async () => {
      setIsFetching(true);
      try {
        const result = await getGames();
        setGames(result.results);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('ERROR : ', e);
      }
      setIsFetching(false);
    };
    fetchGames().then();
  }, []);

  const month = dayjs().format('MMMM');

  return (
    <>
      {
        !isFetching
          ? <HomeTemplate
          latestFavoritesGames={games}
          month={month}
        /> : <p style={{ marginTop: '200px', textAlign: 'center', fontSize: '30px' }}>...loading</p>
      }
    </>
  );
};

export default Home;
