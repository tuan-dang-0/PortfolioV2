import React from 'react';
import SectionHead from '../ui/SectionHead';
import Project from './Project';
import jiating from '../../assets/jiating.png';
import { FaDocker, FaReact } from 'react-icons/fa';

import { FaGolang } from 'react-icons/fa6';
import { BiLogoTypescript } from 'react-icons/bi';
import { DiPostgresql } from 'react-icons/di';
export default function Portfolio() {
  return (
    <div className="relative mt-1 h-full items-start border-t-2 border-t-primary-800T bg-primary text-white">
      <SectionHead text="Portfolio" />
      <div className="mx-auto flex h-full max-w-[96rem] grow flex-col items-center justify-around gap-44 px-36 pb-44">
        <Project
          imgUrl={jiating}
          name={'Jiating Blog Page'}
          direction={'left'}
          children={
            <>
              <BiLogoTypescript size="3rem" />
              <FaReact size="3rem" />
              <FaDocker size="3rem" />
              <FaGolang size="3rem" />
              <DiPostgresql size="3rem" />
            </>
          }
        />
        <Project
          imgUrl={jiating}
          name={'Jiating Blog Page'}
          direction={'right'}
          children={<></>}
        />
        <Project
          imgUrl={jiating}
          name={'Jiating Blog Page'}
          direction={'left'}
          children={<></>}
        />
      </div>
    </div>
  );
}
