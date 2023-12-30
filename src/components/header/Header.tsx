import Logo from './Logo';
import Typer from './Typer';
import Button from '../ui/Button';
import Scroll from './Scroll';

export default function Header() {
  return (
    <div className=" h-screen bg-primary bg-[linear-gradient(137deg,_rgba(0,0,0,.7)_0%,_rgba(24,41,76,.7)_56%,_rgba(40,101,138,.7)_100%)] pt-24 text-white">
      <div className="mx-auto flex h-full max-w-[96rem] grow items-center justify-around">
        <div className=" w-[50%] text-nowrap px-36">
          <div className="mb-8">
            <p className="text-5xl">Hey, I'm</p>
            <h2 className="text-7xl font-semibold leading-snug">Tuan Dang</h2>
            <Typer />
          </div>
          <div className="flex grow gap-8">
            <Button text="Contact Me" />
            <Button text="Projects" />
          </div>
        </div>
        <div className="w-[50%]grow h-full">
          <Logo />
        </div>
      </div>
      <Scroll />
    </div>
  );
}
