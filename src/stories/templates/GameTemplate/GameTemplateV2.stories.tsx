import React from 'react';
import { Story, Meta } from '@storybook/react';
import { GameTemplateV2, GameTemplateV2Props } from '../../../components/templates/game-template/GameTemplateV2';
import { game } from '../../../../.storybook/data/game';
import { screenshots } from '../../../../.storybook/data/screenshots';

// const game = games[1];

export default {
  title: 'Templates/GameV2',
  component: GameTemplateV2,
} as Meta;

const Template: Story<GameTemplateV2Props> = (args) => <GameTemplateV2 {...args} />;

export const GameTemplateV2Default = Template.bind({});

GameTemplateV2Default.args = {
  // @ts-ignore
  game,
  screenshots,
};
