import React from 'react';

interface Props {
  children: JSX.Element[];
}

export function SliderItem({ children }: Props) {
  return <div className="flex flex-col justify-center">{children}</div>;
}
