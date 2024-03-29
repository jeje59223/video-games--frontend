import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Story } from '@storybook/react';
import GameCard, { GameCardProps } from '../../../components/organisms/GameCard/GameCard';
import { games } from '../../../../.storybook/data/games';

const game = games[3];

export default {
  title: 'Organisms/GameCard',
  component: GameCard,
  decorators: [
    // @ts-ignore
    (ComponentStory) => (
      <Router>
        <ComponentStory />
      </Router>
    ),
  ],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template: Story<GameCardProps> = (args) => <GameCard {...args} />;

export const GamesCard = Template.bind({});
GamesCard.args = {
  title: game.name,
  background_image: game.background_image,
  // description: game.summary,
  genres: game.genres.map((genre) => genre.name),
  rating: game.rating,
  rating_count: game.ratings_count,
};
