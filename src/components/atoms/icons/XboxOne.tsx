import React from 'react';
import { IconProps } from './type';

export const XboxOne: React.FC<IconProps> = (props: IconProps) => {
  const { size, fill } = props;
  return (
        <svg fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width={size} height={size}>
            {/* eslint-disable-next-line max-len */}
            <path d="M 5.867188 2.296875 C 5.855469 2.304688 5.84375 2.316406 5.832031 2.328125 C 5.90625 2.25 6.011719 2.167969 6.078125 2.121094 C 8.09375 0.8125 10.421875 0.113281 13.003906 0.113281 C 15.417969 0.113281 17.679688 0.78125 19.609375 1.941406 C 19.75 2.023438 20.132813 2.285156 20.328125 2.523438 C 18.464844 0.46875 12.988281 4.878906 12.988281 4.878906 C 11.097656 3.417969 9.355469 2.421875 8.058594 2.066406 C 6.972656 1.769531 6.222656 2.019531 5.867188 2.296875 Z M 22.4375 4.238281 C 22.382813 4.175781 22.320313 4.117188 22.261719 4.050781 C 21.792969 3.535156 21.214844 3.410156 20.691406 3.441406 C 20.214844 3.59375 18.019531 4.382813 15.316406 6.9375 C 15.316406 6.9375 18.359375 9.898438 20.226563 12.925781 C 22.089844 15.953125 23.203125 18.332031 22.519531 21.632813 C 24.597656 19.347656 25.863281 16.3125 25.863281 12.976563 C 25.863281 9.605469 24.566406 6.53125 22.4375 4.238281 Z M 17.789063 14.21875 C 16.964844 13.289063 15.734375 11.964844 14.113281 10.347656 C 13.757813 9.996094 13.382813 9.628906 12.988281 9.246094 C 12.988281 9.246094 12.394531 9.839844 11.625 10.621094 L 11.625 10.617188 C 10.636719 11.617188 9.355469 12.917969 8.644531 13.679688 C 7.378906 15.03125 3.75 19.273438 3.546875 21.652344 C 3.546875 21.652344 2.738281 19.765625 4.511719 15.414063 C 5.667969 12.566406 9.164063 8.296875 10.625 6.902344 C 10.625 6.902344 9.289063 5.4375 7.617188 4.421875 L 7.605469 4.417969 C 7.605469 4.417969 7.585938 4.402344 7.558594 4.386719 C 6.753906 3.90625 5.871094 3.535156 5.027344 3.484375 C 4.164063 3.546875 3.617188 4.179688 3.617188 4.179688 C 1.457031 6.480469 0.136719 9.574219 0.136719 12.980469 C 0.136719 20.085938 5.894531 25.84375 13.003906 25.84375 C 16.773438 25.84375 20.164063 24.21875 22.519531 21.632813 C 22.519531 21.628906 22.25 19.933594 20.519531 17.5 C 20.109375 16.929688 18.625 15.152344 17.789063 14.21875 Z"/>
        </svg>
  );
};
