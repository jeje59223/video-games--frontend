import React from 'react';
import { Story } from '@storybook/react';
import
{ ParallaxContainer, ParallaxContainerProps }
  from '../../../components/atoms/ParallaxContainer/ParallaxContainer';
import { games } from '../../../../.storybook/data/games';

const game = games[3];

export default {
  title: 'Atoms/ParallaxContainer',
  component: ParallaxContainer,
  argTypes: {},
};

const Template: Story<ParallaxContainerProps> = (args) => <ParallaxContainer {...args} />;

export const ParallaxContainerDefault = Template.bind({});

ParallaxContainerDefault.args = {
  parallax_background: game.short_screenshots[1].image,
};
