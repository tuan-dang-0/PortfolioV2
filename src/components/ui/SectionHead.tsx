import React from 'react';

export default function SectionHead({ text }: { text: string }) {
  return (
    <h2 className="mx-auto mb-36 flex items-center justify-center overflow-hidden pt-20 text-center text-2xl font-semibold before:mr-20 before:block before:h-[0.1rem] before:w-80 before:bg-white after:ml-20 after:block after:h-[0.1rem] after:w-80 after:bg-white">
      {text}
    </h2>
  );
}
