import React from 'react';
import { Game } from '../../../models/game';
import { Screenshots } from '../../../models/screenshots';
import './GameDescription.scss';

export interface GameDescriptionProps {
  background_image: Game['background_image_additional']
  description_raw: Game['description_raw'];
  screenshots?: Screenshots['image'][]
}

const GameDescription: React.FC<GameDescriptionProps> = ({
  background_image,
  description_raw,
  screenshots,
}) => {
  return (
    <main className="GameDescription">
      <div className="GameDescription-details">
        <div className="GameDescription-details--summary">
          <h2>Summary</h2>
          <p>{description_raw}</p>
        </div>
        <div className="GameDescription-details--image" style={{ backgroundImage: `url(${background_image})` }}></div>
      </div>
      <div className="GameDescription--carousel">
        {
          screenshots?.map((screenshot) => {
            return (
              <img style={{ width: '400px' }} src={screenshot} alt='toto'/>
            );
          })
        }
      </div>
    </main>
  );
};

export default GameDescription;
