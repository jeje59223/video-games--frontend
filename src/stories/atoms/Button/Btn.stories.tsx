import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { Story } from '@storybook/react';
import Btn, { BtnProps } from '../../../components/atoms/Button/Btn';

export default {
  title: 'Atoms/Button',
  component: Btn,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template: Story<BtnProps> = (args) => <Btn {...args} />;

export const BtnOutlined = Template.bind({});
BtnOutlined.args = {
  variant: 'outlined',
  label: 'Submit',
  color: 'primary',
  size: 'small',
};

export const BtnContained = Template.bind({});
BtnContained.args = {
  variant: 'contained',
  label: 'Submit',
  color: 'success',
  size: 'medium',
};

export const BtnContainedLargeWithIcon = Template.bind({});
BtnContainedLargeWithIcon.args = {
  variant: 'contained',
  label: 'Delete',
  color: 'error',
  icon: <DeleteIcon/>,
  size: 'large',
};

export const BtnSmallWithIcon = Template.bind({});
BtnSmallWithIcon.args = {
  label: 'Add',
  color: 'primary',
  icon: <AddIcon/>,
  size: 'small',
};
