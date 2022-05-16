import { Chip } from '@mui/material';
import React from 'react';
import './Tag.scss';

export interface TagProps {
    color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    icon?: React.ReactElement;
    label: React.ReactNode;
    size: 'small' | 'medium';
    variant: 'filled' | 'outlined';
    className?: string;
}

const Tag: React.FC<TagProps> = ({
  color = 'info',
  icon,
  label,
  size,
  variant,
  className,
}) => {
  return (
        <Chip className={className} color={color} icon={icon} label={label} size={size} variant={variant} />
  );
};

export default Tag;
