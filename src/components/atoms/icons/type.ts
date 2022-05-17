import { CSSProperties, HTMLAttributes } from 'react';

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export interface IconProps extends HTMLAttributes<any> {
    fill?: string;
    size?: string;
    style?: CSSProperties;
    className?: string;
}
