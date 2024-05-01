import React from 'react';

interface IconProps {
    name: string;
    size?: number;
    color?: string;
}

const Icon: React.FC<IconProps>= ({ name, size , color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke={color}
      className={`icon icon-${name} ${size}`}
    >
      <use xlinkHref={`/icons/${name}.svg#icon`} />
    </svg>
  );
};

export default Icon;
