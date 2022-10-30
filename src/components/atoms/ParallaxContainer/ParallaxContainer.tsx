import React from 'react';
import './ParallaxContainer.scss';

export interface ParallaxContainerProps {
  parallax_background: string;
}

export const ParallaxContainer: React.FC<ParallaxContainerProps> = ({
  parallax_background,
  children,
}) => {
  return (
  <div className="ParallaxContainer">
    <div
      className="ParallaxContainer-background"
      style={{ backgroundImage: `url(${parallax_background})` }}
    >
      {children}
    </div>
  </div>
  );
};
