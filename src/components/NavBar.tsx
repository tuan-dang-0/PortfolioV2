import logo from '../assets/logo.png';

export default function NavBar() {
  return (
    <div className="fixed flex h-24 w-full flex-wrap content-center justify-between bg-primary px-48 font-bold text-white shadow-xl">
      <img src={logo} className="h-16" />
      <ul className="flex items-center gap-10 text-lg">
        <li className="block uppercase">
          <a>Home</a>
        </li>
        <li className="uppercase">
          <a>About</a>
        </li>
        <li className="uppercase">
          <a>Projects</a>
        </li>
        <li className="uppercase">
          <a>Contact</a>
        </li>
      </ul>
    </div>
  );
}
