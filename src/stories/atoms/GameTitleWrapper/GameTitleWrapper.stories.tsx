import React from 'react';
import { Story, Meta } from '@storybook/react';
import { GameTitleWrapper, GameTitleWrapperProps } from '../../../components/atoms/GameTitleWrapper/GameTitleWrapper';
import { games } from '../../../../.storybook/data/games';

const game = games[1];

export default {
  title: 'Atoms/GameTitleWrapper',
  component: GameTitleWrapper,
} as Meta;

const Template: Story<GameTitleWrapperProps> = (args) => <GameTitleWrapper {...args} />;

export const GameTitleWrapperDefault = Template.bind({});
GameTitleWrapperDefault.args = {
  title: game.name,
  released: game.released,
  platforms: game.platforms.map((platform) => platform.platform.name),
};
