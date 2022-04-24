import React from 'react';
import NavBar from './NavBar';
import {Story} from '@storybook/react';

export default {
    title: 'Molecules/NavBar',
    component: NavBar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template: Story = args => <NavBar {...args} />;

export const NavBarGames = Template.bind({});
NavBarGames.args = {
    title: 'Video Games Catalog'
};
