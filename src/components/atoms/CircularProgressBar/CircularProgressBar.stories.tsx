import React from 'react';
import { Story } from '@storybook/react';
import CircularProgressbar from './CircularProgressBar';

export default {
  title: 'Atoms/CircularProgressbar',
  component: CircularProgressbar,
  argTypes: {},
};

const Template: Story = (args) => <div style={{ width: '140px', color: 'white' }}>
        <CircularProgressbar rating={0} ratings_count={0} {...args} />
    </div>;

export const CircularProgressbarV2GamesBad = Template.bind({});
CircularProgressbarV2GamesBad.args = {
  rating: 1.12,
  ratings_count: 7315,
};

export const CircularProgressbarV2GamesMedium = Template.bind({});
CircularProgressbarV2GamesMedium.args = {
  rating: 2.8,
  ratings_count: 8981,
};

export const CircularProgressbarV2GamesGood = Template.bind({});
CircularProgressbarV2GamesGood.args = {
  rating: 3.8,
  ratings_count: 12768,
};

export const CircularProgressbarV2GamesVeryGood = Template.bind({});
CircularProgressbarV2GamesVeryGood.args = {
  rating: 4.56,
  ratings_count: 1768,
};
