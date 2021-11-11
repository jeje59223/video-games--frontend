import * as React from 'react';
import Button from '@mui/material/Button';

export interface BtnProps {
  variant: 'text' | 'outlined' | 'contained';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  icon: React.ReactNode;
  size: 'small' | 'medium' | 'large';
  label: string;
}

const Btn: React.FC<BtnProps> = ({
  variant,
  color,
  size,
  icon,
  label
}) => {
  return (
  <Button variant={variant} color={color} size={size} startIcon={icon}>{label}</Button>
  )
}

export default Btn;
