import Logo from './Logo';
import Typewriter from './TypeWriter';
import Button from '../ui/Button';
import Scroll from './Scroll';
import { Reveal } from '../ui/Reveal';
import React, { ForwardedRef, RefObject, forwardRef } from 'react';

interface RefsType {
  headerRef: RefObject<HTMLDivElement>; // Use appropriate type instead of 'any'
  aboutRef: RefObject<HTMLDivElement>;
  portfolioRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
}

export default forwardRef(function Header(
  props: {
    refs: RefsType;
    setClose: React.Dispatch<React.SetStateAction<boolean>>;
  },
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative bg-primary bg-[linear-gradient(137deg,_rgba(0,0,0,.7)_0%,_rgba(24,41,76,.7)_56%,_rgba(40,101,138,.7)_100%)] pb-10 pt-24 text-white md:h-screen"
    >
      <div className="mx-auto flex h-full max-w-[96rem] grow flex-col items-center justify-around md:flex-row">
        <div className=" mb-24 text-nowrap pt-24 sm:px-28 md:mb-0 md:w-[50%] md:pt-0 lg:px-36">
          <div className="mb-4 lg:mb-8">
            <Reveal delay={1}>
              <p className="text-2xl sm:text-4xl md:text-2xl lg:text-3xl">
                Hey, I'm
              </p>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="text-3xl font-semibold leading-snug sm:text-5xl lg:text-7xl">
                Tuan Dang
              </h2>
            </Reveal>
            <Reveal width="100%" delay={1}>
              <p className="pt-2 text-xl leading-relaxed sm:text-2xl lg:text-3xl">
                <Typewriter
                  words={[
                    ' Web Developer',
                    ' Software Engineer',
                    'n Avid Learner',
                  ]}
                  delay={100}
                  infinite
                />
              </p>
            </Reveal>
          </div>
          <Reveal delay={1}>
            <div className="flex grow gap-8">
              <Button text="Contact Me" setClose={props.setClose} />
              <Button text="Projects" toRef={props.refs.portfolioRef} />
            </div>
          </Reveal>
        </div>
        <div className="mx-10 mb-10 h-72 w-[50%] sm:h-96 md:my-0 md:h-[90%] md:w-[50%] md:grow md:pl-12 lg:h-full lg:pl-0">
          <Logo />
        </div>
      </div>
      <Scroll aboutRef={props.refs.aboutRef} />
    </div>
  );
});
