import React from 'react';

interface Props {
  children: JSX.Element;
}

export const Slider = ({ children }: Props) => {
  return (
    <div className="border-2 border-y-white bg-secondary-800 px-16 py-6 font-semibold text-white">
      {children}
    </div>
  );
};
