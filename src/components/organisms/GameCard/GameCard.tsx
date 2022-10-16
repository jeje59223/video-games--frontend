import React, { useState } from 'react';
import {
  Card, CardActionArea, CardContent, CardMedia, Stack, Tooltip, Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './GameCard.scss';
import { Link } from 'react-router-dom';
import Tag from '../../atoms/Tag/Tag';
import CircularProgressbar from '../../atoms/CircularProgressBar/CircularProgressBar';
import { Game, Genre } from '../../../models/game';

export interface GameCardProps {
  background_image: string;
  title: string;
  description?: string;
  genres?: Genre['name'][];
  rating: Game['rating'];
  rating_count: Game['ratings_count'];
  released: Game['released'];
  id: Game['id']
}

const GameCard: React.FC<GameCardProps> = ({
  background_image,
  title,
  genres,
  rating,
  rating_count,
  released,
  id,
}) => {
  const [clicked, setClicked] = useState(false);

  const addFavorite = () => {
    setClicked(!clicked);
  };

  function getGenres() {
    return <>
      {
        genres ? genres.map((genre, index) => (
          <Tag key={index} label={genre} size="small" variant="outlined" color='default'/>
        )) : null
      }
    </>;
  }

  return (
    <Link to={`/game/${id}`}>
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
        <CardContent>
          <Typography className="GameCard-title" gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography className="GameCard-released" variant="body2" color="white">
            {released}
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
    </Link>
  );
};

export default GameCard;
