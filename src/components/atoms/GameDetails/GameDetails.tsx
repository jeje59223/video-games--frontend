import React from 'react';
import { Developer, Game, Genre } from '../../../models/game';
import './GameDetails.scss';

export interface GameDetailsProps {
  stores?: Game['stores'];
  genres?: Genre[];
  description_raw: Game['description_raw'];
  metacritic_url: string;
  developers?: Developer[];
  reddit_description: Game['reddit_description'];
}

export const GameDetails: React.FC<GameDetailsProps> = ({
  stores,
  genres,
  description_raw,
  metacritic_url,
  developers,
  reddit_description,
}) => {
  return (
    <div className="GameDetails">
      <p>{reddit_description}</p>
      <p>
        <strong>Genres: </strong>{genres?.join(' / ')}
      </p>
      <p>
        <strong>Stores: </strong>{stores?.join(' / ')}
      </p>
      <p>
        <strong>Developers: </strong>{developers}
      </p>
      <p>{description_raw}</p>
      <a href={metacritic_url}>{metacritic_url}</a>
    </div>
  );
};
