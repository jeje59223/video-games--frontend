import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  HomeTemplate as HomeTemplateComponent,
  HomeTemplateProps,
} from '../../../components/templates/home-template/HomeTemplate';
import { games } from '../../../../.storybook/data/games';

export default {
  title: 'Templates/Home',
  decorators: [
    // @ts-ignore
    (ComponentStory) => (
      <Router>
        <ComponentStory />
      </Router>
    ),
  ],
  component: HomeTemplateComponent,
} as Meta;

export const Home: Story<HomeTemplateProps> = (args) => <HomeTemplateComponent {...args} />;
Home.args = {
  // @ts-ignore
  bestGamesOfTheMonth: games,
};
