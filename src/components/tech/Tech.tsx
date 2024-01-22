import { useState, useEffect } from 'react';
import { Slider } from './Slider';
import { SliderItem } from './SliderItem';
import {
  FaAws,
  FaDocker,
  FaLinux,
  FaReact,
  FaPython,
  FaHtml5,
  FaJava,
  FaNode,
  FaGitAlt,
  FaJira,
} from 'react-icons/fa';
import { SiCplusplus, SiExpress } from 'react-icons/si';
import { FaGolang } from 'react-icons/fa6';
import { BiLogoTypescript, BiLogoJavascript } from 'react-icons/bi';
import { DiPostgresql, DiMongodb, DiCss3 } from 'react-icons/di';
import { PiFileSql } from 'react-icons/pi';

export default function Tech() {
  const [iconSize, setIconSize] = useState('5rem');

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 1024) {
      setIconSize('4rem');
    } else {
      setIconSize('5rem');
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  const langs = [
    { icon: <BiLogoTypescript size={iconSize} />, text: 'TypeScript' },
    { icon: <FaReact size={iconSize} />, text: 'ReactJS' },
    { icon: <DiMongodb size={iconSize} />, text: 'MongoDB' },
    { icon: <FaNode size={iconSize} />, text: 'NodeJS' },
    { icon: <SiExpress size={iconSize} />, text: 'ExpressJS' },
    { icon: <PiFileSql size={iconSize} />, text: 'SQL' },
    { icon: <FaGolang size={iconSize} />, text: 'Golang' },
    { icon: <SiCplusplus size={iconSize} />, text: 'C++' },
    { icon: <FaPython size={iconSize} />, text: 'Python' },
    { icon: <FaJava size={iconSize} />, text: 'Java' },
    { icon: <BiLogoJavascript size={iconSize} />, text: 'JavaScript' },
    { icon: <FaHtml5 size={iconSize} />, text: 'HTML' },
    { icon: <DiCss3 size={iconSize} />, text: 'CSS' },
  ];
  const devTools = [
    { icon: <FaAws size={iconSize} />, text: 'AWS' },
    { icon: <FaGitAlt size={iconSize} />, text: 'Git' },
    { icon: <FaLinux size={iconSize} />, text: 'Linux' },
    { icon: <FaDocker size={iconSize} />, text: 'Docker' },
    { icon: <DiPostgresql size={iconSize} />, text: 'Postgresql' },
    { icon: <FaJira size={iconSize} />, text: 'Jira' },
  ];
  return (
    <div className="items-centertext-white flex w-full flex-col sm:text-lg lg:text-xl">
      <Slider center={false} header="Languages / Frameworks">
        {langs.map((item) => (
          <SliderItem icon={item.icon} text={item.text} />
        ))}
      </Slider>
      <Slider center={true} header="Development Tools">
        {devTools.map((item) => (
          <SliderItem icon={item.icon} text={item.text} />
        ))}
      </Slider>
    </div>
  );
}
