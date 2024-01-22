import React, { useState, useEffect, forwardRef } from 'react';
import SectionHead from '../ui/SectionHead';
import Project from './Project';
import jiating from '../../assets/jiating.png';
import clubfinity from '../../assets/clubfinity.png';
import pocketpantry from '../../assets/pocketpantry.png';
import { FaDocker, FaReact, FaPython } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { FaGolang } from 'react-icons/fa6';
import { BiLogoTypescript, BiLogoJavascript } from 'react-icons/bi';
import { DiPostgresql, DiMongodb } from 'react-icons/di';
import { IoLogoFirebase } from 'react-icons/io5';
import { TbBrandReactNative } from 'react-icons/tb';
import { FadeIn } from '../ui/FadeIn';
export default forwardRef(function Portfolio(_, ref) {
  const [iconSize, setIconSize] = useState('3rem');
  const [isMobile, setIsMobile] = useState(false);
  const [small, setSmall] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    if (window.innerWidth < 640) {
      setIconSize('2.2rem');
      setSmall(true);
    } else {
      setIconSize('3rem');
      setSmall(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  return (
    <div
      className="relative mt-1 h-full items-start border-t-2 border-t-primary-800T bg-primary text-white"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <SectionHead text="Portfolio" />
      <div className="mx-auto flex h-full max-w-[96rem] grow flex-col items-center justify-around gap-44 px-8 pb-44 sm:px-16 xl:px-36">
        <FadeIn direction="left" width="100%">
          <Project
            imgUrl={jiating}
            name={'Jiating Blog Page'}
            direction={'left'}
            description={
              'Website used by local University of Florida traditional dance group “Jiating” to post articles about their recent performances. Also allows organizations to learn about and book the dance group for future performances'
            }
            children={
              <>
                <BiLogoTypescript size={iconSize} />
                <FaReact size={iconSize} />
                <FaDocker size={iconSize} />
                <FaGolang size={iconSize} />
                <DiPostgresql size={iconSize} />
              </>
            }
            isMobile={isMobile}
            isSmall={small}
            githubUrl={'https://github.com/m1del/Jiating'}
            url={'https://github.com/m1del/Jiating'}
          />
        </FadeIn>
        <FadeIn direction="right" width="100%">
          <Project
            imgUrl={clubfinity}
            name={'Clubfinity'}
            direction={'right'}
            description={
              "Created by UF's Software Engineering Club, Clubfinity is a mobile application which allows students to have better access to clubs at UF while giving these clubs more exposure. It aims to fill the current vacuum between students and clubs, allowing for a more connected campus."
            }
            children={
              <>
                <TbBrandReactNative size={iconSize} />
                <BiLogoJavascript size={iconSize} />
                <SiExpress size={iconSize} />
                <DiMongodb size={iconSize} />
              </>
            }
            isMobile={isMobile}
            isSmall={small}
            githubUrl={'https://gitlab.com/ufsec/clubfinity'}
            url={'https://gitlab.com/ufsec/clubfinity'}
          />
        </FadeIn>
        <FadeIn direction="left" width="100%">
          <Project
            imgUrl={pocketpantry}
            name={'Pocket Pantry'}
            direction={'left'}
            description={
              'Pocket pantry was created for fostering the community to reduce food waste. It is a food tracker, where users can add foods to their pantry, refrigerator, or freezer. From there, using an ML model and ChatGPT, users can generate recipes for foods close to expiring.'
            }
            children={
              <>
                <BiLogoTypescript size={iconSize} />
                <FaReact size={iconSize} />
                <FaPython size={iconSize} />
                <IoLogoFirebase size={iconSize} />
              </>
            }
            isMobile={isMobile}
            isSmall={small}
            githubUrl={'https://github.com/m1del/sasehack'}
            url={'https://www.youtube.com/watch?v=RQ5utcfLwe8'}
          />
        </FadeIn>
      </div>
    </div>
  );
});
