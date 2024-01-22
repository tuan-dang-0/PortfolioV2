import React from 'react';

export default function Scroll({
  aboutRef,
}: {
  aboutRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div className="absolute bottom-5 left-1/2">
      <a
        className="hover:cursor-pointer"
        onClick={() => {
          console.log('test');
          console.log(aboutRef);
          if (aboutRef && aboutRef.current)
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <div id="mouse-scroll">
          <div className="mouse">
            <div className="mouse-in"></div>
          </div>
          <div>
            <span className="down-arrow-1"></span>
          </div>
        </div>
      </a>
    </div>
  );
}
