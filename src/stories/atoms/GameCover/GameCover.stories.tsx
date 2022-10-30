import React from 'react';
import { Story } from '@storybook/react';
import { GameCover, GameCoverProps } from '../../../components/atoms/GameCover/GameCover';
import { games } from '../../../../.storybook/data/games';

const game = games[3];

export default {
  title: 'Atoms/GameCover',
  component: GameCover,
  argTypes: {},
};

const Template: Story<GameCoverProps> = (args) => <GameCover {...args} />;

export const GameCoverDefault = Template.bind({});
GameCoverDefault.args = {
  owned: game.added_by_status.owned,
  cover: game.background_image,
  playing: game.added_by_status.playing,
  toPlay: game.added_by_status.toplay,
};
