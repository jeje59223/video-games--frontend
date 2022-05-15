import React from 'react';
import { Story, Meta } from '@storybook/react';
import { HomeTemplate as HomeTemplateComponent, HomeTemplateProps } from './HomeTemplate';

export default {
  title: 'Templates/Home',
  component: HomeTemplateComponent,
} as Meta;

export const Home: Story<HomeTemplateProps> = (args) => <HomeTemplateComponent {...args} />;
