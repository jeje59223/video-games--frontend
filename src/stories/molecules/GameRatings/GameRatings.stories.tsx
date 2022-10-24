import React from 'react';
import { Story, Meta } from '@storybook/react';
import { GameRatings, GameRatingsProps } from '../../../components/molecules/GameRatings/GameRatings';
import { game } from '../../../../.storybook/data/game';

export default {
  title: 'Molecules/GameRatings',
  component: GameRatings,
} as Meta;

const Template: Story<GameRatingsProps> = (args) => <GameRatings {...args} />;

export const GameRatingsDefault = Template.bind({});

GameRatingsDefault.args = {
  ratings_count: game.ratings_count,
  rating: game.rating,
  // @ts-ignore
  ratings: game.ratings,
};
