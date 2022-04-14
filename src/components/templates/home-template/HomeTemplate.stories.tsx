import React from 'react';
import { Story, Meta } from "@storybook/react";
import { games } from '../../../../.storybook/data/games';
import {HomeTemplate, HomeTemplateProps} from './HomeTemplate';

const latestFavoritesGames = games;
console.log(latestFavoritesGames)

const Template: Story<HomeTemplateProps> = (args) => <HomeTemplate  {...args}/>

export const HomeStory = Template.bind({})
HomeStory.storyName = 'Home';
// HomeStory.args = {latestFavoritesGames: [], ...latestFavoritesGames}

export default {
    title: 'Templates/Home',
    component: HomeTemplate,
} as Meta;
