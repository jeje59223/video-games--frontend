import React from 'react';
import { Story, Meta } from '@storybook/react';
import { GameDetails, GameDetailsProps } from '../../../components/atoms/GameDetails/GameDetails';
import { game } from '../../../../.storybook/data/game';

export default {
  title: 'Atoms/GameDetails',
  component: GameDetails,
} as Meta;

const Template: Story<GameDetailsProps> = (args) => <GameDetails {...args} />;

export const GameDetailsDefault = Template.bind({});
GameDetailsDefault.args = {
  stores: game.stores,
  description_raw: game.description_raw,
  metacritic_url: game.metacritic_url,
  developers: game.developers,
  genres: game.genres,
  reddit_description: game.reddit_description,
};
