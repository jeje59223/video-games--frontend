import React, { HTMLAttributes } from 'react';

export interface IconProps extends HTMLAttributes<IconProps> {
  fill?: string;
  size?: string;
  style?: React.CSSProperties;
  className?: string;
}
