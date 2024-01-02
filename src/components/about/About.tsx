import React, { useState, useEffect, useRef } from 'react';
import headshot from '../../assets/headshot.png';
export default function About() {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  const imgBorder = `bg-tertiary absolute block w-[28rem] -translate-x-5 translate-y-5`;

  //   const imgBorder = `before:border-tertiary before:absolute before:block before:h-[${height}px] before:w-96 before:border-4 before:border-solid before:translate-x-2.5 before:z-0`;

  useEffect(() => {
    if (ref.current) setHeight((ref.current as HTMLElement).clientHeight);
  }, []);

  return (
    <div className="relative flex h-screen justify-center bg-primary pb-20 text-white">
      <h2 className="absolute mx-auto flex items-center justify-center pt-16 text-center text-2xl font-semibold before:mr-20 before:block before:h-[0.1rem] before:w-80 before:bg-white after:ml-20 after:block after:h-[0.1rem] after:w-80 after:bg-white">
        About Me
      </h2>
      <div className="mx-auto flex h-full max-w-[96rem] grow items-center justify-around">
        <div className="relative flex w-[50%] pl-36">
          <img
            ref={ref}
            className="z-20 h-auto w-[28rem] object-scale-down"
            src={headshot}
          />
          <div className={imgBorder} style={{ height: `${height}px` }}></div>
        </div>
        <div className="w-[50%]"></div>
      </div>
    </div>
  );
}
