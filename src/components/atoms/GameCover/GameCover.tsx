import React from 'react';
import Btn from '../Button/Btn';
import { Check } from '../icons/Check';
import { Gamer } from '../icons/Gamer';
import { GameController } from '../icons/GameController';
import './GameCover.scss';

export interface GameCoverProps {
  owned?: number;
  toPlay?: number;
  playing?: number;
  cover: string;
}

export const GameCover: React.FC<GameCoverProps> = ({
  cover,
  owned,
  toPlay,
  playing,
}) => {
  return (
    <div className="GameCover">
      <div className="GameCover-cover" style={{ backgroundImage: `url(${cover})` }}></div>
      <div className="GameCover-action">
        <Btn color="info" variant="contained" size="medium" label="Add to favorite" />
      </div>
      <div className="GameCover-status">
        <div className="GameCover-status--owner">
          <GameController size="32px" />
          <p>OWNER</p>
          <p>{owned}</p>
        </div>
        <div className="GameCover-status--playing">
          <Gamer size="32px" />
          <p>PLAYING</p>
          <p>{playing}</p>
        </div>
        <div className="GameCover-status--to-play">
          <Check size="32px" />
          <p>TO PLAY</p>
          <p>{toPlay}</p>
        </div>
      </div>
    </div>
  );
};
