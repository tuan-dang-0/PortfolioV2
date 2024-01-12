import React from 'react';
import lion from '../../assets/lion.png';
import dumbbell from '../../assets/dumbbell.png';
import pot from '../../assets/pot.png';
import HeadShot from '../../components/about/HeadShot';
import SectionHead from '../../components/ui/SectionHead';
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from 'react-parallax-mouse';

export default function About() {
  return (
    <MouseParallaxContainer
      containerStyle={{
        height: '90vh',
        width: '100%',
        position: 'relative',
        display: 'block',
      }}
      resetOnLeave
    >
      <div className="relative h-full items-start bg-primary text-white">
        <SectionHead text="About Me" />
        <MouseParallaxChild
          style={{ left: '5%', top: '-11%', position: 'relative' }}
          factorX={0.02}
          factorY={0.02}
        >
          <img
            className="layer absolute w-20 -rotate-12 opacity-20"
            src={pot}
          />
        </MouseParallaxChild>

        <MouseParallaxChild
          style={{ left: '90%', top: '-11%', position: 'relative' }}
          factorX={-0.04}
          factorY={-0.04}
        >
          <img
            className="layer absolute w-20 -rotate-12 opacity-20"
            src={lion}
          />
        </MouseParallaxChild>

        <MouseParallaxChild
          style={{ left: '7%', top: '52%', position: 'relative' }}
          factorX={-0.02}
          factorY={-0.02}
        >
          <img
            className="layer absolute w-20 rotate-12 opacity-20"
            src={dumbbell}
          />
        </MouseParallaxChild>

        <MouseParallaxChild
          style={{ left: '46%', top: '7%', position: 'relative' }}
          factorX={0.04}
          factorY={0.04}
        >
          <img
            className="layer absolute w-20 -rotate-12 opacity-20"
            src={lion}
          />
        </MouseParallaxChild>

        <MouseParallaxChild
          style={{ left: '50%', top: '55%', position: 'relative' }}
          factorX={-0.03}
          factorY={-0.03}
        >
          <img
            className="layer absolute w-20 -rotate-12 opacity-20"
            src={pot}
          />
        </MouseParallaxChild>

        <MouseParallaxChild
          style={{ left: '87%', top: '58%', position: 'relative' }}
          factorX={0.03}
          factorY={0.03}
        >
          <img
            className="layer absolute w-20 rotate-[70deg] opacity-20 "
            src={dumbbell}
          />
        </MouseParallaxChild>

        <div className="mx-auto flex max-w-[96rem] justify-around">
          <div className="relative ml-36 flex w-[50%] justify-center">
            <HeadShot />
          </div>
          <div className="relative ml-24 mr-36 flex w-[50%]">
            <div>
              <p className="bg-tertiary rounded-md px-5 py-6 text-xl font-medium leading-relaxed text-gray-50 shadow-lg">
                Hey! My name is Tuan and I enjoy writing code to solve
                real-world problems. As a{' '}
                <span className="text-accent font-bold">full-stack</span>{' '}
                developer, I have a passion for learning new tech with current
                interests in both{' '}
                <span className="text-accent font-bold">Web</span> and{' '}
                <span className="text-accent font-bold">Cloud</span>{' '}
                development.
                <br />
                <br />
                Outside of tech, I enjoy cooking, weightlifting, and traditional
                lion dancing!
                <br />
                <br />
                Tools I am currently playing with:
                <br />
                React, Tailwind, Docker, and Golang
              </p>
            </div>
          </div>
        </div>
      </div>
    </MouseParallaxContainer>
  );
}

// <a href="https://www.flaticon.com/free-icons/gym" title="gym icons">Gym icons created by Mayor Icons - Flaticon</a>

// <a href="https://www.flaticon.com/free-icons/lion-dance" title="lion dance icons">Lion dance icons created by Freepik - Flaticon</a>
