import React from 'react';

export default function Scroll() {
  return (
    <div className="absolute bottom-5 left-1/2">
      <a href="#">
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
