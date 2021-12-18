import React from 'react';
import CircleRating from "./CircleRating";
import { Story } from '@storybook/react';


export default {
    title: 'Atoms/CircleRating',
    component: CircleRating,
    argTypes: {},
};

const Template: Story = args => <CircleRating rating={0} {...args} />;

export const CircleRatingGamesBad = Template.bind({});
CircleRatingGamesBad.args = {
    rating: 1.8
}

export const CircleRatingGamesMedium = Template.bind({});
CircleRatingGamesMedium.args = {
    rating: 2.8
}

export const CircleRatingGamesGood = Template.bind({});
CircleRatingGamesGood.args = {
    rating: 3.5
}

export const CircleRatingGamesVeryGood = Template.bind({});
CircleRatingGamesVeryGood.args = {
    rating: 4.5
}
