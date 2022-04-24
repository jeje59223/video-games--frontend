import React from 'react';
import { Game } from "../../../models/game";
import GameCard from "../../organisms/GameCard/GameCard";
import { games } from '../../../../.storybook/data/games';
import './HomeTemplate.scss';

export interface HomeTemplateProps {
    latestFavoritesGames: Game[]
}

export const HomeTemplate: React.FC<HomeTemplateProps> = ({
    latestFavoritesGames = games,
}) => {

    return (
        <div className="HomeTemplate">
            <h1 className="HomeTemplate-title">Welcome in your <strong style={{ color: "#494949"}}>Games Catalog</strong></h1>
            <hr />
            <h2 className="HomeTemplate-subtitle">Here are your latest favorite games</h2>
            <div className="HomeTemplate-favorites-games">
            {
                latestFavoritesGames.map((game) => (
                    <GameCard
                        key={game.id}
                        background_image={game.background_image}
                        title={game.name}
                        genres={game.genres.map(genre => genre.name)}
                        rating={game.rating}
                        rating_count={game.ratings_count}
                    />
                ))
            }
            </div>
        </div>
        )
}
