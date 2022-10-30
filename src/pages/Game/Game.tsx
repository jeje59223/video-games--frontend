import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import GameTemplate from '../../components/templates/game-template/GameTemplate';
import { emptyGames } from '../../emptyData/Game/emptyGame';
import { GameTemplateV2 } from '../../components/templates/game-template/GameTemplateV2';

const Game = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [videoGame, setVideoGame] = useState(emptyGames);
  const [screenshots, setScreenshots] = useState([]);
  const { id } = useParams();

  const getGame = async () => {
    const data = await fetch(`http://localhost:8080/games/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (data.ok) return data.json();
    throw new Error(data.statusText);
  };

  const getScreenshots = async () => {
    const data = await fetch(`http://localhost:8080/games/${id}/screenshots`, {
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
    const fetchScreenshots = async () => {
      setIsFetching(true);
      try {
        const result = await getScreenshots();
        setScreenshots(result.results);
        console.log('Screen : ', result.results);
      } catch (e) {
        console.error('Error : ', e);
      }
      setIsFetching(false);
    };
    fetchGame();
    fetchScreenshots();
  }, []);
  console.log('GAME : ', videoGame);
  // @ts-ignore
  console.log('SCREENSHOTS : ', screenshots);
  console.log('SCREENSHOTS [0] : ', screenshots[0]);

  return (
    <>
      {
        !isFetching

          ? <GameTemplateV2
            // @ts-ignore
            game={videoGame}
            screenshots={screenshots}
          />
          : <p style={{ marginTop: '200px', textAlign: 'center', fontSize: '30px' }}>...loading</p>
      }
    </>
  );
};

export default Game;
