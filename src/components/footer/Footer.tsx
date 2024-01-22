import { Dispatch, SetStateAction } from 'react';
import logo from '../../assets/logo.png';

export default function Footer({
  setClose,
}: {
  setClose: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="flex flex-col items-center gap-14 bg-primary-800 py-24 text-white lg:py-44">
      <img src={logo} className="h-20 w-20" />
      <span className="flex items-center justify-center gap-16 text-lg font-bold lg:gap-24">
        <a
          className="nav-link"
          href="https://www.linkedin.com/in/tuan-dang-uf/"
          target="_blank"
        >
          <p>LinkedIn</p>
        </a>
        <a
          className="nav-link"
          href="https://github.com/tuan-dang-0"
          target="_blank"
        >
          <p>Github</p>
        </a>
        <a
          className="nav-link"
          onClick={() => {
            setClose(false);
          }}
        >
          <p>Contact</p>
        </a>
      </span>
      <span>&copy; 2024 Created by Tuan Dang</span>
    </div>
  );
}
