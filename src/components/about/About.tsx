import React from 'react';
import lion from '../../assets/lion.png';
import dumbbell from '../../assets/dumbbell.png';
import pot from '../../assets/pot.png';
import HeadShot from '../../components/about/HeadShot';
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from 'react-parallax-mouse';

export default function About() {
  return (
    <MouseParallaxContainer
      containerStyle={{
        height: '100vh',
        width: '100%',
        position: 'relative',
        display: 'block',
      }}
      resetOnLeave
    >
      <div className="relative h-full items-start bg-primary text-white">
        <h2 className="mx-auto mb-24 flex items-center justify-center overflow-hidden pt-16 text-center text-2xl font-semibold before:mr-20 before:block before:h-[0.1rem] before:w-80 before:bg-white after:ml-20 after:block after:h-[0.1rem] after:w-80 after:bg-white">
          About Me
        </h2>
        <MouseParallaxChild
          style={{ left: '5rem', top: '-5rem', position: 'relative' }}
          factorX={0.02}
          factorY={0.02}
        >
          <img
            className="layer absolute w-20 -rotate-12 opacity-20"
            src={pot}
          />
        </MouseParallaxChild>

        <MouseParallaxChild
          style={{ left: '90%', top: '-5rem', position: 'relative' }}
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
              <p className="bg-tertiary rounded-md px-5 py-6 text-xl font-medium leading-relaxed shadow-lg">
                Hey! My name is Tuan and I enjoy writing code to solve
                real-world problems. As a{' '}
                <span className="text-secondary">full-stack</span> developer, I
                have a passion for learning new tech with current interests in
                both <span className="text-secondary">Web</span> and{' '}
                <span className="text-secondary">Cloud</span> development.
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
