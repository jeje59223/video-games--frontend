import React from 'react';
import GameCard, {GameCardProps} from './GameCard';
import {Story} from "@storybook/react";

const game = {
  title: "Gears of War: Ultimate Edition",
  background_image: "https://media.rawg.io/media/games/49f/49f35940fbb28a00c4e10d7c7ef44de4.jpg",
  summary: "Gears of War: Ultimate Edition is a third-person shooter developed by Epic Games. " +
    "It is the first part of the original Gears of War trilogy.",
  genres: [
    {
      id: 4,
      name: "Action"
    },
    {
      id: 2,
      name: "Shooter"
    }
  ],
}



export default {
  title: 'GameCard',
  component: GameCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template: Story<GameCardProps> = (args) => <GameCard {...args} />;

const listGenres = game.genres.map((genre) => genre.name)

export const GamesCard = Template.bind({});
GamesCard.args = {
  title: game.title,
  background_image: game.background_image,
  summary: game.summary,
  genres: listGenres
};
