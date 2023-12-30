import { TypeAnimation } from 'react-type-animation';

export default function Typer() {
  return (
    <TypeAnimation
      sequence={[
        'A Web Developer',
        1000,
        'A Software Engineer',
        1000,
        'An Avid Learner',
        1000,
      ]}
      speed={40}
      repeat={Infinity}
      style={{
        fontSize: '1.85rem',
        color: '#B7B7B7',
        fontWeight: '500',
      }}
    />
  );
}
