import React from 'react';
import GameCard, {GameCardProps} from './GameCard';
import { games } from '../../../../.storybook/data/games';
import {Story} from "@storybook/react";

const game = games[1];

export default {
  title: 'Organisms/GameCard',
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
  title: game.name,
  background_image: game.background_image,
  // description: game.summary,
  genres: listGenres,
  rating: game.rating,
  rating_count: game.ratings_count,
};
