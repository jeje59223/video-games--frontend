import React from 'react';
import { Link } from 'react-router-dom';
import { Game } from '../../../models/game';
import GameCard from '../../organisms/GameCard/GameCard';
import Btn from '../../atoms/Button/Btn';
import './HomeTemplate.scss';

export interface HomeTemplateProps {
  bestGamesOfTheMonth: Game[],
  month: string,
}

export const HomeTemplate: React.FC<HomeTemplateProps> = ({
  bestGamesOfTheMonth,
  month,
}) => {
  const displayGameCards = (games: Game[]) => {
    return (
      games.map((game) => (
        <GameCard
          key={game.id}
          background_image={game.background_image}
          title={game.name}
          genres={game.genres.map((genre) => genre.name)}
          rating={game.rating}
          rating_count={game.ratings_count}
          released={game.released}
          id={game.id}
        />
      ))
    );
  };

  return (
    <div className="HomeTemplate">
      <h1 className="HomeTemplate-title" data-testid="video-games-catalog">
        Welcome in your <strong>Video Games Catalog</strong>
      </h1>
      <hr />
      <div className="HomeTemplate-subtitle">
        <div>
          <h2 className="HomeTemplate-subtitle-text">Here are the best games of <strong>{month}</strong></h2>
        </div>
        <div className="HomeTemplate-subtitle-button">
          <Link to="/games">
            <Btn variant="contained" size="medium" label="See all games" color="inherit"/>
          </Link>
        </div>
      </div>
      <div className="HomeTemplate-favorites-games">
        { displayGameCards(bestGamesOfTheMonth) }
      </div>
    </div>
  );
};
