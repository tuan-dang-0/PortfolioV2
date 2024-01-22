export default function SectionHead({ text }: { text: string }) {
  return (
    <h2 className="mx-auto mb-24 flex items-center justify-center overflow-hidden pt-20 text-center text-xl font-semibold before:mr-6 before:block before:h-[0.1rem] before:w-24 before:bg-white after:ml-6 after:block after:h-[0.1rem] after:w-24 after:bg-white sm:text-2xl sm:before:mr-12 sm:before:w-32 sm:after:ml-12 sm:after:w-32 md:mb-36 md:before:w-52 md:after:w-52 lg:before:mr-20 lg:before:w-80 lg:after:ml-20 lg:after:w-80">
      {text}
    </h2>
  );
}
