import React from 'react';
import { IconProps } from './icons.type';

export const Check: React.FC<IconProps> = (props) => {
  const { fill, size } = props;
  return (
    // eslint-disable-next-line max-len
    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width={size} height={size} viewBox="0 0 64.000000 64.000000" preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" fill={fill} stroke="none">
        {/* eslint-disable-next-line max-len */}
        <path d="M235 501 c-157 -72 -152 -299 7 -366 70 -29 161 -13 217 38 79 72 79 222 0 294 -58 53 -152 67 -224 34z m188 -132 c7 -12 -5 -29 -58 -80 -36 -35 -70 -65 -74 -67 -4 -1 -24 16 -46 38 -38 39 -38 40 -20 60 16 18 20 19 35 5 24 -21 30 -20 80 25 47 41 66 46 83 19z"/>
        {/* eslint-disable-next-line max-len */}
        <path d="M338 323 c-45 -45 -48 -46 -66 -30 -19 17 -42 23 -41 10 0 -5 13 -18 29 -31 l30 -23 55 47 c49 43 69 74 47 74 -4 0 -28 -21 -54 -47z"/>
      </g>
    </svg>
  );
};
