import React, { forwardRef } from 'react';

export default forwardRef(function Loader(_props, ref) {
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="fixed z-50 h-[100vh] w-[100vw] bg-primary transition-all duration-500"
    ></div>
  );
});
