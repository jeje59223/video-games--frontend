import React from 'react';
import { Game } from '../../models/game';
import { Screenshots } from '../../models/screenshots';
import { ParallaxContainer } from '../atoms/ParallaxContainer/ParallaxContainer';
import { GameCover } from '../atoms/GameCover/GameCover';
import { GameTitleWrapper } from '../atoms/GameTitleWrapper/GameTitleWrapper';
import { GameDetails } from '../atoms/GameDetails/GameDetails';

export interface GameTemplateV2Props {
  game: Game,
  screenshots: Screenshots[]
}

export const GameTemplateV2: React.FC<GameTemplateV2Props> = ({
  game,
  // screenshots,
}) => {
  return (
  <div className="GameTemplateV2">
    <ParallaxContainer parallax_background={game.short_screenshots[1].image} />
    <GameCover
      owned={game.added_by_status?.owned}
      toPlay={game.added_by_status?.toplay}
      playing={game.added_by_status?.playing}
      cover={game.background_image}
      />
    <GameTitleWrapper
      title={game.name}
      released={game.released}
      // @ts-ignore
      platforms={game.platforms.map((gamePlatforms) => gamePlatforms.platform.name)}
    />
    <GameDetails
      // @ts-ignore
      stores={game.stores.map((s) => s.store.name)}
      // @ts-ignore
      genres={game.genres.map((g) => g.name)}
      description_raw={game.description_raw}
      metacritic_url={game.metacritic_url}
      // @ts-ignore
      developers={game.developers.map((d) => d.name)}
      reddit_description={game.reddit_description}
    />
  </div>
  );
};
