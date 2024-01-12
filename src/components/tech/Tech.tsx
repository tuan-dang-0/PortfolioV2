import React from 'react';
import { Slider } from './Slider';
import { SliderItem } from './SliderItem';
import { FaDocker, FaReact } from 'react-icons/fa';

import { FaGolang } from 'react-icons/fa6';
import { BiLogoTypescript } from 'react-icons/bi';
import { DiPostgresql } from 'react-icons/di';

export default function Tech() {
  return (
    <Slider>
      <SliderItem>
        <BiLogoTypescript size="5rem" />
        <p>TypeScript</p>
      </SliderItem>
    </Slider>
  );
}
