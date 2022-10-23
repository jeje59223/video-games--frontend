import React from 'react';
import GameHeader from '../../atoms/GameHeader/GameHeader';
import { Game } from '../../../models/game';
import GameDescription from '../../molecules/GameDescription/GameDescription';
import { Screenshots } from '../../../models/screenshots';

export interface GameTemplateProps {
  game: Game,
  screenshots: Screenshots[]
}

const GameTemplate: React.FC<GameTemplateProps> = ({
  game,
  screenshots,
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
    <GameDescription
      background_image={game.background_image_additional}
      description_raw={game.description_raw}
      screenshots={screenshots.map((screenshot) => screenshot.image)}
    />
  </div>
  );
};

export default GameTemplate;
