import React, {useState} from "react";
import {Card, CardActionArea, CardContent, CardMedia, Chip, Stack, Tooltip, Typography} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import './GameCard.scss';

export interface GameCardProps {
  background_image: string;
  title: string;
  summary: string;
  genres: string[];
}

const GameCard: React.FC<GameCardProps> = ({
  background_image,
  title,
  summary,
  genres,
}) => {
  const [isClick, setIsClick] = useState(false);

  const addFavorite = () => {
    setIsClick(!isClick);
  }

  return (
    <Card className="GameCard" sx={{ maxWidth: 345, bgcolor: "text.secondary", color: "white" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={background_image}
          alt={title}
          className="GameCard-image"
          style={{position: "relative"}}
        />
        <Tooltip title={isClick ? "Delete to Favorites" : "Add to Favorites"} placement="top" arrow>
          <div className="heart" >
            <FavoriteIcon onClick={addFavorite} color={isClick ? "error" : "inherit"}/>
          </div>
        </Tooltip>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="white">
            {summary}
          </Typography>
        </CardContent>
        <CardContent>
          <Stack direction="row" flexWrap="wrap">
          {genres.map((genre) => {
            return (
              <Chip size="small" color="info" label={genre} sx={{bgcolor: "text.primary", margin: 0.5}} />
            )
          })}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default GameCard;
