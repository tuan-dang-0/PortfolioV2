import React, { useState } from 'react';
import headshot from '../../assets/headshot.png';
import cooking from '../../assets/cooking.png';

export default function HeadShot() {
  const height = 20.25;
  const width = 32;
  const [translate, setTranslate] = useState(0);
  function changeTranslate(direction: string) {
    if (direction === 'left' && translate < 0) {
      setTranslate(translate + 100);
    } else if (direction === 'right' && translate >= 0) {
      setTranslate(translate - 100);
    }
  }
  return (
    <>
      <div
        className="relative z-20 overflow-hidden"
        style={{ width: `${width}rem` }}
      >
        <div className="relative">
          <div>
            <img
              className="absolute rounded-md border-2 object-contain transition-all duration-500"
              src={headshot}
              style={{
                height: `${height}rem`,
                maxWidth: `${width}rem`,
                transform: `translateX(${translate + 0}%)`,
              }}
            />
            <img
              className="absolute rounded-md border-2 object-contain transition-all duration-500"
              src={cooking}
              style={{
                height: `${height}rem`,
                maxWidth: `${width}rem`,
                transform: `translateX(${translate + 100}%)`,
              }}
            />
          </div>
        </div>
        <button
          className="bg-transparent hover:text-secondary-200 absolute top-1/2 z-30 flex h-8 w-8 -translate-y-full items-center justify-center rounded-full transition-colors duration-300"
          onClick={() => changeTranslate('left')}
        >
          <svg
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="hover:text-secondary-200 absolute right-0 top-1/2 flex h-10 w-10  -translate-y-full items-center justify-center rounded-full duration-300"
          onClick={() => changeTranslate('right')}
        >
          <svg
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div
        className="bg-tertiary absolute block -translate-x-5 translate-y-5"
        style={{ height: `${height}rem`, width: `${width}rem` }}
      />
    </>
  );
}
