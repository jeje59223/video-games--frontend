import React from 'react';
import { Story } from '@storybook/react';
import GameHeader, { GameHeaderProps } from '../../../components/atoms/GameHeader/GameHeader';
import { games } from '../../../../.storybook/data/games';

const game = games[3];

export default {
  title: 'Atoms/GameHeader',
  component: GameHeader,
  argTypes: {},
};

const Template: Story<GameHeaderProps> = (args) => <GameHeader {...args} />;

export const GameHeaderDefault = Template.bind({});

GameHeaderDefault.args = {
  background_image: game.background_image,
  title: game.name,
  rating: game.rating,
  rating_count: game.ratings_count,
  platforms: game.platforms,
};
