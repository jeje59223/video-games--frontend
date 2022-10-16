import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GameTemplate from '../../components/templates/game-template/GameTemplate';
import { emptyGames } from '../../emptyData/Game/emptyGame';

const Game = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [videoGame, setVideoGame] = useState(emptyGames);
  const { id } = useParams();

  const getGame = async () => {
    const data = await fetch(`http://localhost:8080/games/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return data.json();
  };

  useEffect(() => {
    const fetchGame = async () => {
      setIsFetching(true);
      try {
        const result = await getGame();
        setVideoGame(result);
        console.log('Result : ', result);
      } catch (e) {
        console.error('Error : ', e);
      }
      setIsFetching(false);
    };
    fetchGame();
  }, []);
  console.log('GAME : ', videoGame);

  return (
    <>
      {
        !isFetching
          // @ts-ignore
          ? <GameTemplate game={videoGame}/>
          : <p style={{ marginTop: '200px', textAlign: 'center', fontSize: '30px' }}>...loading</p>
      }
    </>
  );
};

export default Game;
