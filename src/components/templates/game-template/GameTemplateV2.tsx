import React from 'react';

import { Screenshots } from '../../../models/screenshots';
import { ParallaxContainer } from '../../atoms/ParallaxContainer/ParallaxContainer';
import { GameCover } from '../../atoms/GameCover/GameCover';
import { GameDetails } from '../../atoms/GameDetails/GameDetails';
import { GameRatings } from '../../molecules/GameRatings/GameRatings';
import './GameTemplateV2.scss';
import { GameTitleWrapper } from '../../atoms/GameTitleWrapper/GameTitleWrapper';
import { gameDetailsById } from '../../../models/gameDetailsById';

export interface GameTemplateV2Props {
  game: gameDetailsById,
  screenshots: Screenshots[]
}

export const GameTemplateV2: React.FC<GameTemplateV2Props> = ({
  game,
  screenshots,
}) => {
  return (
  <div className="GameTemplateV2">
    <ParallaxContainer parallax_background={screenshots[0] ? screenshots[0].image : game.background_image_additional}>
      <GameTitleWrapper
        title={game.name}
        released={game.released}
        platforms={game.platforms}
      />
    </ParallaxContainer>
    <GameCover
      owned={game.added_by_status?.owned}
      toPlay={game.added_by_status?.toplay}
      playing={game.added_by_status?.playing}
      cover={game.background_image}
      />
    <GameDetails
      stores={game.stores}
      genres={game.genres}
      description_raw={game.description_raw}
      metacritic_url={game.metacritic_url}
      developers={game.developers}
      reddit_description={game.reddit_description}
    />
    <GameRatings
      rating={game.rating}
      ratings_count={game.ratings_count}
      ratings={game.ratings}
    />
  </div>
  );
};
