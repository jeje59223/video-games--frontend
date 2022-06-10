import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Story } from '@storybook/react';
import NavBar from '../../../components/molecules/NavBar/NavBar';

export default {
  title: 'Molecules/NavBar',
  component: NavBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template: Story = (args) => (
    <Router>
      <NavBar {...args} />
    </Router>
);

export const NavBarGames = Template.bind({});
NavBarGames.args = {
  title: 'Video Games Catalog',
};
