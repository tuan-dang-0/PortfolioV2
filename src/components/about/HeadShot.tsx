import { useState } from 'react';
import headshot from '../../assets/headshot.png';
import cooking from '../../assets/cooking.png';
import lionjump from '../../assets/lionjump.png';

export default function HeadShot() {
  // const [h, setH] = useState(`${height}rem`);
  // const [w, setW] = useState(`${width}rem`);
  const [translate, setTranslate] = useState(0);
  function changeTranslate(direction: string) {
    if (direction === 'left') {
      if (translate === 0) setTranslate(-200);
      else setTranslate(translate + 100);
    } else if (direction === 'right') {
      if (translate === -200) setTranslate(0);
      else setTranslate(translate - 100);
    }
  }
  // W = 1.58 * H

  return (
    <>
      <div className="relative z-20 overflow-hidden sm:w-[32rem] lg:h-[16rem] lg:w-[25.28rem] xl:h-[18rem] xl:w-[28.44rem] 2xl:h-[20.25rem] 2xl:w-[32rem]">
        <div className="relative flex w-full items-center">
          <img
            className="transition-translate w-full rounded-md border-2 object-contain duration-500 lg:h-[16rem] xl:h-[18rem] 2xl:h-[20.25rem]"
            src={headshot}
            style={{
              transform: `translateX(${translate + 0}%)`,
            }}
          />
          <img
            className="absolute rounded-md border-2 object-contain transition-transform duration-500 lg:h-[16rem] xl:h-[18rem] 2xl:h-[20.25rem]"
            src={cooking}
            style={{
              transform: `translateX(${translate + 100}%)`,
            }}
          />
          <img
            className="object-fit absolute rounded-md border-2 transition-transform duration-500 lg:h-[16rem] xl:h-[18rem] 2xl:h-[20.25rem]"
            src={lionjump}
            style={{
              transform: `translateX(${translate + 200}%)`,
            }}
          />
        </div>
        <button
          className="absolute top-1/2 z-30 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-transparent transition-colors duration-300 hover:text-secondary-200"
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="absolute right-0 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full duration-300 hover:text-secondary-200"
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div className="absolute block -translate-x-5 translate-y-5 bg-tertiary lg:h-[16rem] lg:w-[25.28rem] xl:h-[18rem] xl:w-[28.44rem] 2xl:h-[20.25rem] 2xl:w-[32rem]" />
    </>
  );
}
