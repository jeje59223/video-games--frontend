import React from 'react';
import { Story } from '@storybook/react';
import Btn, { BtnProps } from '../../../components/atoms/Button/Btn';
import { XboxOne } from '../../../components/atoms/icons/XboxOne';
import { Atari } from '../../../components/atoms/icons/Atari';

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
  icon: <XboxOne size="16px" fill="white" />,
  size: 'large',
};

export const BtnSmallWithIcon = Template.bind({});
BtnSmallWithIcon.args = {
  label: 'Add',
  color: 'primary',
  icon: <Atari size="24px" fill="#1565c0"/>,
  size: 'small',
};
