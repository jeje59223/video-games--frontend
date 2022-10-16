import React from 'react';
import { Story, Meta } from '@storybook/react';
import GameTemplate, { GameTemplateProps } from '../../../components/templates/game-template/GameTemplate';
import { games } from '../../../../.storybook/data/games';

const game = games[1];

export default {
  title: 'Templates/Game',
  component: GameTemplate,
} as Meta;

const Template: Story<GameTemplateProps> = (args) => <GameTemplate {...args} />;

export const GameTemplateDefault = Template.bind({});
GameTemplateDefault.args = {
  // @ts-ignore
  game,
};
