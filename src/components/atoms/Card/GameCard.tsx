import React, {useState} from "react";
import {Card, CardActionArea, CardContent, CardMedia, Chip, Stack, Tooltip, Typography} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
// import './GameCard.scss';

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
  console.log(isClick)
  const addFavorite = () => {
    setIsClick(!isClick)
    console.log(isClick)
  }

  return (
    <Card sx={{ maxWidth: 345, bgcolor: "text.secondary", color: "white" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={background_image}
          alt="green iguana"
        />
        <Tooltip title={isClick ? "Delete to Favorites" : "Add to Favorites"} placement="top" arrow>
          <div className="heart" style={{position: "relative", top: "-30px", left: "310px", background: "#666666", width: "24px", clipPath: "polygon(M15,45 A30,30,0,0,1,75,45 A30,30,0,0,1,135,45 Q135,90,75,130 Q15,90,15,45 Z)"}}>
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
