import React from 'react';

export default function Button({ text }: { text: string }) {
  return (
    <button className=" before:bg-secondary-800 relative z-10 flex  min-w-36 items-center justify-center rounded-lg border-2 py-4 text-xl font-semibold shadow-lg transition-all duration-1000 before:absolute before:bottom-0 before:left-0 before:-z-10 before:h-full before:w-0 before:rounded-lg before:transition-all before:duration-500 after:absolute after:bottom-0 after:left-0 after:z-[-11] after:h-full after:w-full after:rounded-lg after:bg-secondary hover:before:w-full">
      {text}
    </button>
  );
}
