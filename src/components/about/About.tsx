import React, { forwardRef } from 'react';
import lion from '../../assets/lion.png';
import dumbbell from '../../assets/dumbbell.png';
import pot from '../../assets/pot.png';
import HeadShot from '../../components/about/HeadShot';
import SectionHead from '../../components/ui/SectionHead';
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from 'react-parallax-mouse';
import { FadeIn } from '../ui/FadeIn';

export default forwardRef(function About(_, ref) {
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="relative">
      <MouseParallaxContainer
        containerStyle={{
          height: '100%',
          width: '100%',
          display: 'block',
        }}
        resetOnLeave
      >
        <div className="relative items-start bg-primary pb-24 text-white lg:h-full">
          <SectionHead text="About Me" />
          <MouseParallaxChild
            style={{
              left: '5%',
              top: '12%',
              position: 'absolute',
              height: '5rem',
              width: '5rem',
            }}
            factorX={0.02}
            factorY={0.02}
          >
            <img className="layer w-20 -rotate-12 opacity-20" src={pot} />
          </MouseParallaxChild>

          <MouseParallaxChild
            style={{
              left: '90%',
              top: '10%',
              position: 'absolute',
              height: '5rem',
              width: '5rem',
            }}
            factorX={-0.04}
            factorY={-0.04}
          >
            <img className="layer w-20 -rotate-12 opacity-20" src={lion} />
          </MouseParallaxChild>

          <MouseParallaxChild
            style={{
              left: '7%',
              bottom: '0%',
              position: 'absolute',
              height: '5rem',
              width: '5rem',
              transform: 'translateY(-50%)',
            }}
            factorX={-0.02}
            factorY={-0.02}
          >
            <img className="layer w-20 rotate-12 opacity-20" src={dumbbell} />
          </MouseParallaxChild>

          <MouseParallaxChild
            style={{
              left: '46%',
              top: '20%',
              position: 'absolute',
              height: '5rem',
              width: '5rem',
            }}
            factorX={0.04}
            factorY={0.04}
          >
            <img
              className="layer absolute w-20 -rotate-12 opacity-20"
              src={lion}
            />
          </MouseParallaxChild>

          <MouseParallaxChild
            style={{
              left: '50%',
              top: '85%',
              position: 'absolute',
              height: '5rem',
              width: '5rem',
              transform: 'translateX(-50%)',
            }}
            factorX={-0.03}
            factorY={-0.03}
          >
            <img
              className="layer absolute w-20 -rotate-12 opacity-20"
              src={pot}
            />
          </MouseParallaxChild>
          <MouseParallaxChild
            style={{
              left: '88%',
              top: '40%',
              position: 'absolute',
              height: '5rem',
              width: '5rem',
              transform: 'translateX(-50%)',
            }}
            factorX={-0.03}
            factorY={-0.03}
          >
            <img
              className="layer absolute w-20 -rotate-12 opacity-20"
              src={pot}
            />
          </MouseParallaxChild>

          <MouseParallaxChild
            style={{
              left: '87%',
              bottom: '0%',
              position: 'absolute',
              height: '5rem',
              width: '5rem',
              transform: 'translateY(-50%)',
            }}
            factorX={0.03}
            factorY={0.03}
          >
            <img
              className="layer absolute w-20 rotate-[70deg] opacity-20 "
              src={dumbbell}
            />
          </MouseParallaxChild>
          <MouseParallaxChild
            style={{
              left: '10%',
              top: '40%',
              position: 'absolute',
              height: '5rem',
              width: '5rem',
            }}
            factorX={0.03}
            factorY={0.03}
          >
            <img
              className="layer absolute w-20 rotate-[70deg] opacity-20 "
              src={dumbbell}
            />
          </MouseParallaxChild>

          <FadeIn direction="bottom">
            <div className="flex w-full max-w-[96rem] flex-col items-center justify-around gap-8 sm:mx-auto md:mb-36 lg:flex-row">
              <div className="relative flex w-[70%] items-center justify-center sm:w-[50%] lg:ml-24 xl:ml-36">
                <HeadShot />
              </div>
              <div className="relative flex w-[70%] text-center sm:w-[60%] md:w-[50%] lg:ml-8 lg:mr-24 lg:text-left xl:ml-24 xl:mr-36">
                <div>
                  <p className="rounded-md bg-tertiary px-5 py-6 text-sm font-medium leading-normal text-gray-50 shadow-lg sm:text-lg lg:max-w-[30rem] lg:text-base xl:max-w-none xl:text-lg 2xl:text-xl 2xl:leading-relaxed">
                    Hey! My name is Tuan and I enjoy writing code to solve
                    real-world problems. As a{' '}
                    <span className="font-bold text-accent">full-stack</span>{' '}
                    developer, I have a passion for learning new tech with
                    current interests in both{' '}
                    <span className="font-bold text-accent">Web</span> and{' '}
                    <span className="font-bold text-accent">Cloud</span>{' '}
                    development.
                    <br />
                    <br />
                    Outside of tech, I enjoy cooking, weightlifting, and
                    traditional lion dancing!
                    <br />
                    <br />
                    Tools I am currently playing with:
                    <br />
                    React, Tailwind, Docker, and Golang
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </MouseParallaxContainer>
    </div>
  );
});

// <a href="https://www.flaticon.com/free-icons/gym" title="gym icons">Gym icons created by Mayor Icons - Flaticon</a>

// <a href="https://www.flaticon.com/free-icons/lion-dance" title="lion dance icons">Lion dance icons created by Freepik - Flaticon</a>
