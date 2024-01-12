import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaDocker, FaReact } from 'react-icons/fa';

import { FaGolang } from 'react-icons/fa6';
import { BiLogoTypescript } from 'react-icons/bi';
import { DiPostgresql } from 'react-icons/di';

export default function Project({
  imgUrl,
  name,
  direction,
  children,
}: {
  imgUrl: string;
  name: string;
  direction: string;
  children: React.ReactNode;
}) {
  if (direction === 'left') {
    return (
      <div className="grid grid-cols-project items-center">
        <a className="group relative hover:cursor-pointer">
          <div>
            <img className="h-96 rounded object-cover shadow-md" src={imgUrl} />
            <div className="absolute left-0 right-0 top-0 h-[50%] w-full overflow-hidden bg-black-rgba transition-all duration-300 ease-in group-hover:h-0">
              <div className="flex h-full items-center justify-center">
                <p className=" text-2xl font-semibold">Created Using:</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[50%] w-full overflow-hidden bg-black-rgba transition-all duration-300 ease-in group-hover:h-0">
              <div className="flex justify-center gap-4">{children}</div>
            </div>
          </div>
        </a>
        <div className="z-10 -translate-x-12">
          <h3 className="text-right text-2xl font-semibold leading-loose">
            {name}
          </h3>
          <p className="rounded bg-secondary-T px-5 py-6 text-lg font-semibold leading-relaxed shadow-md">
            Website used by local University of Florida traditional dance group
            “Jiating” to post articles about their recent performances. Allows
            organizations to learn about and book the dance group for future
            performances as well.
          </p>
          <div className="mt-2 flex items-center justify-end gap-4 text-accent">
            <a className="hover:text-accent-light transition-colors duration-300 hover:cursor-pointer">
              <FaGithub size="2.2rem" />
            </a>
            <a className="hover:text-accent-light transition-colors duration-300 hover:cursor-pointer">
              <FaExternalLinkAlt size="1.8rem" />
            </a>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="relative grid grid-cols-project items-center">
        <div className="z-10 translate-x-12">
          <h3 className="text-left text-2xl font-semibold leading-loose ">
            {name}
          </h3>
          <p className="rounded bg-secondary-T px-5 py-6 text-lg font-semibold leading-relaxed shadow-md">
            Website used by local University of Florida traditional dance group
            “Jiating” to post articles about their recent performances. Allows
            organizations to learn about and book the dance group for future
            performances as well.
          </p>
          <div className=" mt-2 flex items-center justify-start gap-4 text-accent">
            <a className="hover:text-accent-light transition-colors duration-300 hover:cursor-pointer">
              <FaGithub size="2.2rem" />
            </a>
            <a className="hover:text-accent-light transition-colors duration-300 hover:cursor-pointer">
              <FaExternalLinkAlt size="1.8rem" />
            </a>
          </div>
        </div>
        <a className="group relative hover:cursor-pointer">
          <img className="h-96 rounded object-cover shadow-md" src={imgUrl} />
          <div className="absolute left-0 right-0 top-0 h-[50%] w-full overflow-hidden bg-black-rgba transition-all duration-300 ease-in group-hover:h-0">
            <div className="flex h-full items-center justify-center">
              <p className=" text-2xl font-semibold">Created Using:</p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[50%] w-full overflow-hidden bg-black-rgba transition-all duration-300 ease-in group-hover:h-0">
            <div className="flex justify-center gap-4">{children}</div>
          </div>
        </a>
      </div>
    );
}
