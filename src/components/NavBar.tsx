import logo from '../assets/logo.png';

export default function NavBar() {
  return (
    <div className="group fixed z-50 flex h-24 w-full flex-wrap content-center justify-between bg-primary px-48 font-bold text-white shadow-xl">
      <img src={logo} className="h-16" />
      <ul className="flex items-center gap-10 text-lg">
        <li className="nav-link uppercase">
          <a className="">Home</a>
        </li>
        <a className="nav-link ">
          <li className="uppercase">About</li>
        </a>
        <li className="uppercase">
          <a className="nav-link">Projects</a>
        </li>
        <li className="uppercase">
          <a className="nav-link">Contact</a>
        </li>
      </ul>
    </div>
  );
}
