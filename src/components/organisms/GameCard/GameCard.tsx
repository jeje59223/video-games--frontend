import React, { useState } from "react";
import { Card, CardActionArea, CardContent, CardMedia, Stack, Tooltip, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import './GameCard.scss';
import Tag from "../../atoms/Tag/Tag";
import CircleRating from "../../atoms/CircleRating/CircleRating";
import {Genre} from "../../../models/game";

export interface GameCardProps {
  background_image: string;
  title: string;
  description?: string;
  genres?: string[];
  rating: number;
  rating_count: number;
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
        <Tooltip title={clicked ? "Delete to Favorites" : "Add to Favorites"} placement="top-end" arrow>
          <div className="GameCard-heart" >
            <FavoriteIcon onClick={addFavorite} color={clicked ? "error" : "inherit"} />
          </div>
        </Tooltip>
        <CircleRating rating={rating} ratings_count={rating_count} />
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
          {genres ? genres.map((genre) => {
            return (
                <Tag label={genre} size="small" variant="filled"/>
            )
          }): null}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default GameCard;
