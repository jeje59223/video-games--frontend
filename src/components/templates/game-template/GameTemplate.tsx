import React from 'react';
import GameHeader from '../../atoms/GameHeader/GameHeader';
import { Game } from '../../../models/game';

export interface GameTemplateProps {
  game: Game,
}

const GameTemplate: React.FC<GameTemplateProps> = ({
  game,
}) => {
  return (
  <div className="GameTemplate">
    <GameHeader
      background_image={game.background_image}
      title={game.name}
      rating={game.rating}
      rating_count={game.ratings_count}
      // @ts-ignore
      platforms={game.platforms.map((gamePlatforms) => gamePlatforms.platform.name)}
    />
  </div>
  );
};

export default GameTemplate;
