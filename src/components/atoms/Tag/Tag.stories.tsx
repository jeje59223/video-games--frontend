import React from 'react';
import Tag, {TagProps} from './Tag';
import DoneIcon from '@mui/icons-material/Done';
import {Story} from '@storybook/react';

export default {
    title: 'Atoms/Tag',
    component: Tag,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const TagWithoutIcon = Template.bind({});
TagWithoutIcon.args = {
    color: 'error',
    label: 'Danger',
    size: 'medium',
}

export const TagWithIcon = Template.bind({});
TagWithIcon.args = {
    color: 'primary',
    icon: <DoneIcon/>,
    label: 'Success',
    size: 'small'
}

export const TagWithIconOutlined = Template.bind({});
TagWithIconOutlined.args = {
    color: 'secondary',
    icon: <DoneIcon/>,
    label: 'Action',
    size: 'small',
    variant: 'outlined'
}

export const TagWithColor = Template.bind({});
TagWithColor.args = {
    label: 'Action',
    size: 'small',
    variant: 'outlined'
}

