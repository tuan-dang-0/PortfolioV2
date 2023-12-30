import React from 'react';

export default function Button({ text }: { text: string }) {
  return (
    <button className=" flex w-36 items-center justify-center rounded-lg bg-secondary px-4 py-5 text-xl font-semibold shadow-lg">
      {text}
    </button>
  );
}
