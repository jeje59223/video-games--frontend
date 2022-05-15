import React, { useState } from 'react';
import {
  Card, CardActionArea, CardContent, CardMedia, Stack, Tooltip, Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './GameCard.scss';
import Tag from '../../atoms/Tag/Tag';
import CircularProgressbar from '../../atoms/CircularProgressBar/CircularProgressBar';
import { Game } from '../../../models/game';

export interface GameCardProps {
  background_image: string;
  title: string;
  description?: string;
  genres?: Game['genres'];
  rating: Game['rating'];
  rating_count: Game['ratings_count'];
}

const GameCard: React.FC<GameCardProps> = ({
  background_image,
  title,
  description,
  genres,
  rating,
  rating_count,
}) => {
  const [clicked, setClicked] = useState(false);

  const addFavorite = () => {
    setClicked(!clicked);
  };

  function getGenres() {
    return <>
      {
        genres ? genres.map((genre, index) => (
          <Tag key={index} label={genre} size="small" variant="filled"/>
        )) : null
      }
    </>;
  }

  return (
    <Card className="GameCard">
      <CardActionArea>
        <CardMedia
            component="img"
            height="200"
            image={background_image}
            alt={title}
            className="GameCard-image"
        />
        <Tooltip title={clicked ? 'Delete to Favorites' : 'Add to Favorites'} placement="top-end" arrow>
          <div className="GameCard-heart">
            <FavoriteIcon onClick={addFavorite} color={clicked ? 'error' : 'inherit'}/>
          </div>
        </Tooltip>
        <CircularProgressbar rating={rating} ratings_count={rating_count}/>
        <CardContent className="GameCard-title">
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="white">
            {description}
          </Typography>
        </CardContent>
        <hr/>
        <CardContent className="GameCard-footer">
          <Stack direction="row" flexWrap="wrap">
            {getGenres()}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default GameCard;
