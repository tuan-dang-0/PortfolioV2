import { useState, useRef } from 'react';

export const Draggable = ({
  rootClass = '',
  children,
}: {
  rootClass?: string;
  children: React.ReactNode;
}) => {
  const ourRef = useRef<HTMLElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const mouseCoords = useRef({
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    scrollTop: 0,
  });
  const handleDragStart = (e: React.MouseEvent) => {
    if (!ourRef.current) return;
    const slider = ourRef.current.children[0];
    const startX = e.pageX - (slider as HTMLElement).offsetLeft;
    const startY = e.pageY - (slider as HTMLElement).offsetTop;
    const scrollLeft = slider.scrollLeft;
    const scrollTop = slider.scrollTop;
    mouseCoords.current = { startX, startY, scrollLeft, scrollTop };
    setIsMouseDown(true);
    document.body.style.cursor = 'grabbing';
  };
  const handleDragEnd = () => {
    setIsMouseDown(false);
    if (!ourRef.current) return;
    document.body.style.cursor = 'default';
  };
  const handleDrag = (e: React.MouseEvent) => {
    if (!isMouseDown || !ourRef.current) return;
    e.preventDefault();
    const slider = ourRef.current.children[0];
    const x = e.pageX - (slider as HTMLElement).offsetLeft;
    const y = e.pageY - (slider as HTMLElement).offsetTop;
    const walkX = (x - mouseCoords.current.startX) * 1;
    const walkY = (y - mouseCoords.current.startY) * 1;
    slider.scrollLeft = mouseCoords.current.scrollLeft - walkX;
    slider.scrollTop = mouseCoords.current.scrollTop - walkY;
  };

  return (
    <div
      ref={ourRef as React.RefObject<HTMLDivElement>}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseMove={handleDrag}
      className={rootClass + ' flex w-full flex-row overflow-x-scroll '}
    >
      {children}
    </div>
  );
};
