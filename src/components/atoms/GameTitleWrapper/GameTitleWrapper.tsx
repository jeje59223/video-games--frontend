import React from 'react';
import { Platform } from '../../../models/game';
import Tag from '../Tag/Tag';
import './GameTitleWrapper.scss';

export interface GameTitleWrapperProps {
  title: string;
  released: string;
  platforms: Platform[];
}
export const GameTitleWrapper: React.FC<GameTitleWrapperProps> = ({
  title,
  released,
  platforms,
}) => {
  return (
    <div className="GameTitleWrapper">
      <div className="GameTitleWrapper--title">
        <h1 >{title}</h1>
        <h2>{released}</h2>
        <div className="GameTitleWrapper--title-platforms">
          {platforms.map((platform) => {
            return (
              <Tag color="info" label={platform.platform.name} size="medium" variant="filled"/>
            );
          })}
        </div>
      </div>
    </div>
  );
};
