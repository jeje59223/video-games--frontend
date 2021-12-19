import React from 'react';
import CircleRating from "./CircleRating";
import { Story } from '@storybook/react';


export default {
    title: 'Atoms/CircleRating',
    component: CircleRating,
    argTypes: {},
};

const Template: Story = args => <CircleRating ratings_count={0} rating={0} {...args} />;

export const CircleRatingGamesBad = Template.bind({});
CircleRatingGamesBad.args = {
    rating: 1.8,
    ratings_count: 7315,
}

export const CircleRatingGamesMedium = Template.bind({});
CircleRatingGamesMedium.args = {
    rating: 2.8,
    ratings_count: 8981,
}

export const CircleRatingGamesGood = Template.bind({});
CircleRatingGamesGood.args = {
    rating: 3.5,
    ratings_count: 5785,
}

export const CircleRatingGamesVeryGood = Template.bind({});
CircleRatingGamesVeryGood.args = {
    rating: 4.5,
    ratings_count: 8817,
}
