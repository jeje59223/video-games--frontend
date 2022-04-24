import { Chip } from '@mui/material';
import React from 'react';
import './Tag.scss';

export interface TagProps {
    color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    icon?: React.ReactElement;
    label: React.ReactNode;
    size: 'small' | 'medium';
    variant: 'filled' | 'outlined';
}

const Tag: React.FC<TagProps> = ({
    color,
    icon,
    label,
    size,
    variant
}) => {
    return (
        <Chip color={color} icon={icon} label={label} size={size} variant={variant} />
    )
}

export default Tag;
