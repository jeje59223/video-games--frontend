import React from 'react';
import { IconProps } from './type';

export const Ios: React.FC<IconProps> = (props: IconProps) => {
  const { size, fill } = props;
  return (
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
             width={size} height={size} viewBox="0 0 30.000000 30.000000"
             preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)"
               fill={fill} stroke="none">
                <path d="M75 277 c-3 -7 -4 -69 -3 -138 l3 -124 75 0 75 0 0 135 0 135 -73 3
c-54 2 -74 -1 -77 -11z m135 -117 l0 -100 -60 0 -60 0 0 100 0 100 60 0 60 0
0 -100z m-50 -120 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0
10 -4 10 -10z"/>
            </g>
        </svg>
  );
};
