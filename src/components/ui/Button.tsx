import React from 'react';

export default function Button({
  text,
  toRef = null,
  setClose = null,
}: {
  text: string;
  toRef?: React.RefObject<HTMLDivElement> | null;
  setClose?: React.Dispatch<React.SetStateAction<boolean>> | null;
}) {
  return (
    <button
      className="relative z-10 flex min-w-32 items-center justify-center rounded-lg border-2 py-3 text-base font-semibold shadow-lg transition-all duration-1000 before:absolute before:bottom-0 before:left-0 before:-z-10 before:h-full before:w-0 before:rounded-lg before:bg-secondary-800 before:transition-all before:duration-500 after:absolute after:bottom-0 after:left-0 after:z-[-11] after:h-full after:w-full after:rounded-lg after:bg-secondary hover:before:w-full sm:py-4 md:min-w-32 md:text-xl"
      onClick={() => {
        if (toRef && toRef.current) {
          toRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (setClose !== null) {
          setClose(false);
        }
      }}
    >
      {text}
    </button>
  );
}
