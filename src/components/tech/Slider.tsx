import { useRef } from 'react';
import { Draggable } from '../ui/Draggable';
interface Props {
  header: string;
  children: JSX.Element[];
  center: boolean;
}

export const Slider = ({ header, children, center = false }: Props) => {
  const sliderRef = useRef(null);
  const sliderClass =
    'flex flex-row gap-20 overflow-x-scroll px-16 pb-6 pt-8 ' +
    ` ${center ? 'mx-auto' : 'justify-start'} `;
  return (
    <div className=" flex w-full flex-col items-center justify-center border border-y-white bg-secondary-800 py-4 font-semibold text-white">
      <h2>{header}</h2>

      <div className="flex w-full justify-center">
        <Draggable rootClass="drag">
          <div ref={sliderRef} className={sliderClass}>
            {children}
          </div>
        </Draggable>
      </div>
    </div>
  );
};
