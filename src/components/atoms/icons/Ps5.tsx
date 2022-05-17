import React from 'react';
import { IconProps } from './type';

export const Ps5: React.FC<IconProps> = (props: IconProps) => {
  const { size, fill } = props;
  return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={size} height={size}>
            {/* eslint-disable-next-line max-len,no-tabs */}
            <path fill={fill} d="M2,30H0v-4c0-1.654,1.346-3,3-3h9.5c0.827,0,1.5-0.673,1.5-1.5S13.327,20,12.5,20H0v-2h12.5	c1.93,0,3.5,1.57,3.5,3.5S14.43,25,12.5,25H3c-0.551,0-1,0.448-1,1V30z"/>
            {/* eslint-disable-next-line max-len,no-tabs */}
            <path fill={fill} d="M20,30h-7v-2h7c0.551,0,1-0.448,1-1v-6c0-1.654,1.346-3,3-3h7v2h-7c-0.551,0-1,0.448-1,1v6	C23,28.654,21.654,30,20,30z"/>
            {/* eslint-disable-next-line max-len,no-tabs */}
            <path fill={fill} d="M44.5,30H33v-2h11.5c0.827,0,1.5-0.673,1.5-1.5S45.327,25,44.5,25h-8.929	C34.153,25,33,23.847,33,22.429V18h14v2H35v2.429C35,22.744,35.256,23,35.571,23H44.5c1.93,0,3.5,1.57,3.5,3.5S46.43,30,44.5,30z"/>
        </svg>
  );
};
