import React from 'react';
import { Game, Platform } from '../../../models/game';
import CircularProgressbar from '../CircularProgressBar/CircularProgressBar';
import Tag from '../Tag/Tag';
import './GameHeader.scss';

export interface GameHeaderProps {
  background_image: Game['background_image'];
  title: Game['name'];
  rating: Game['rating']
  rating_count: Game['ratings_count']
  platforms?: Platform[]
}

const GameHeader: React.FC<GameHeaderProps> = ({
  background_image,
  title,
  rating,
  rating_count,
  platforms,
}) => {
  return (
    <header className="GameHeader">
      <div className="GameHeader--image" style={{ backgroundImage: `url(${background_image})` }}></div>
      <div className="GameHeader-informations">
        <div className="GameHeader-informations--rating">
          <CircularProgressbar rating={rating} ratings_count={rating_count}/>
        </div>
        <div className="GameHeader-informations--title">
          <h1>{title}</h1>
           <div className="GameHeader-informations--title--platforms">
             {platforms?.map((platform) => {
               return (
                <Tag color="secondary" label={platform.platform.name} size="medium" variant="outlined"/>
               );
             })}
           </div>
        </div>
      </div>
    </header>
  );
};

export default GameHeader;
