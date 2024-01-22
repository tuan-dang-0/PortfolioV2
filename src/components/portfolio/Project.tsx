import React, { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Project({
  imgUrl,
  name,
  direction,
  description,
  children,
  isMobile,
  isSmall,
  url,
  githubUrl,
}: {
  imgUrl: string;
  name: string;
  direction: string;
  description: string;
  children: React.ReactNode;
  isMobile: boolean;
  isSmall: boolean;
  url: string;
  githubUrl: string;
}) {
  const descRef = useRef<HTMLElement>(null);
  if (direction === 'left') {
    return (
      <div className="relative mx-auto max-w-[30.25rem] items-center sm:w-[80%] sm:max-w-full lg:grid lg:w-auto lg:grid-cols-project">
        <a className="group relative hover:cursor-pointer">
          <div>
            <img
              className="h-72 rounded object-cover shadow-md sm:h-96"
              src={imgUrl}
            />
            {!isMobile && (
              <div className="absolute left-0 right-0 top-0 h-[50%] w-full overflow-hidden bg-black-rgba transition-all duration-300 ease-in group-hover:h-0">
                <div className="flex h-full items-center justify-center">
                  <p className=" text-2xl font-semibold">Created Using:</p>
                </div>
              </div>
            )}
            {!isMobile && (
              <div className="absolute bottom-0 left-0 right-0 h-[50%] w-full overflow-hidden bg-black-rgba transition-all duration-300 ease-in group-hover:h-0">
                <div className="flex justify-center gap-4">{children}</div>
              </div>
            )}
          </div>
        </a>
        <div className="absolute top-0 z-10 h-full lg:static lg:top-auto lg:h-auto lg:-translate-x-12">
          <h3 className="absolute right-0 -translate-y-full text-right text-xl font-semibold leading-loose lg:static lg:translate-y-0">
            {name}
          </h3>
          <div
            ref={descRef as React.RefObject<HTMLDivElement>}
            className="flex h-full flex-col items-center justify-center overflow-hidden rounded bg-black-rgba px-5 py-6 text-center text-base font-semibold leading-relaxed shadow-md transition-opacity duration-300 sm:text-lg lg:h-auto lg:flex-none lg:bg-secondary-T lg:text-left"
            onClick={() => {
              if (isMobile && descRef.current) {
                descRef.current.classList.toggle('opacity-0');
              }
            }}
          >
            {description}
            {isMobile && (
              <div className="mt-4 flex flex-row gap-2">{children}</div>
            )}
          </div>
          <div className="mt-2 flex items-center justify-end gap-4 text-accent ">
            <a
              className="transition-colors duration-300 hover:cursor-pointer hover:text-accent-light"
              href={githubUrl}
              target="_blank"
            >
              <FaGithub size={`${isSmall ? '1.8rem' : '2.2rem'}`} />
            </a>
            <a
              className="transition-colors duration-300 hover:cursor-pointer hover:text-accent-light"
              href={url}
              target="_blank"
            >
              <FaExternalLinkAlt size={`${isSmall ? '1.6rem' : '1.8rem'}`} />
            </a>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="relative mx-auto max-w-[30.25rem] items-center sm:w-[80%] sm:max-w-full lg:grid lg:w-auto lg:grid-cols-project">
        <div className="absolute top-0 z-10 h-full lg:static lg:top-auto lg:h-auto lg:translate-x-12">
          <h3 className="absolute left-0 -translate-y-full text-left text-xl font-semibold leading-loose lg:static lg:translate-y-0 ">
            {name}
          </h3>
          <div
            ref={descRef as React.RefObject<HTMLDivElement>}
            className="flex h-full flex-col items-center justify-center overflow-hidden rounded bg-black-rgba px-5 py-6 text-center text-base font-semibold leading-relaxed shadow-md transition-opacity duration-300 sm:text-lg lg:h-auto lg:flex-none lg:bg-secondary-T lg:text-left"
            onClick={() => {
              if (isMobile && descRef.current) {
                descRef.current.classList.toggle('opacity-0');
              }
            }}
          >
            {description}
            {isMobile && (
              <div className="mt-4 flex flex-row gap-2">{children}</div>
            )}
          </div>
          <div className="mt-2 flex items-center justify-start gap-4 text-accent ">
            <a
              className="transition-colors duration-300 hover:cursor-pointer hover:text-accent-light"
              href={githubUrl}
              target="_blank"
            >
              <FaGithub size={`${isSmall ? '1.8rem' : '2.2rem'}`} />
            </a>
            <a
              className="transition-colors duration-300 hover:cursor-pointer hover:text-accent-light"
              href={url}
              target="_blank"
            >
              <FaExternalLinkAlt size={`${isSmall ? '1.6rem' : '1.8rem'}`} />
            </a>
          </div>
        </div>
        <a className="group relative hover:cursor-pointer">
          <div>
            <img
              className="h-72 rounded object-cover shadow-md sm:h-96"
              src={imgUrl}
            />
            {!isMobile && (
              <div className="absolute left-0 right-0 top-0 h-[50%] w-full overflow-hidden bg-black-rgba transition-all duration-300 ease-in group-hover:h-0">
                <div className="flex h-full items-center justify-center">
                  <p className=" text-2xl font-semibold">Created Using:</p>
                </div>
              </div>
            )}
            {!isMobile && (
              <div className="absolute bottom-0 left-0 right-0 h-[50%] w-full overflow-hidden bg-black-rgba transition-all duration-300 ease-in group-hover:h-0">
                <div className="flex justify-center gap-4">{children}</div>
              </div>
            )}
          </div>
        </a>
      </div>
    );
}
