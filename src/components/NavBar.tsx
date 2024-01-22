import {
  RefObject,
  useState,
  useEffect,
  useMemo,
  Dispatch,
  SetStateAction,
} from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import logo from '../assets/logo.png';
import debounce from 'lodash.debounce';

interface RefsType {
  headerRef: RefObject<HTMLDivElement>; // Use appropriate type instead of 'any'
  aboutRef: RefObject<HTMLDivElement>;
  portfolioRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
}

export default function NavBar({
  refs,
  close,
  setClose,
}: {
  refs: RefsType;
  close: boolean;
  setClose: Dispatch<SetStateAction<boolean>>;
}) {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (toggle) {
      document.body.style.overflowY = 'hidden';
    } else document.body.style.overflowY = '';
  }, [toggle]);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, []);

  const [y, setY] = useState(document?.scrollingElement?.scrollHeight);

  const scrollHandler = () => {
    //Scrolling up
    if (y && y > window.scrollY) {
      setShow(true);

      //Scrolling down
    } else if (y && y < window.scrollY && !toggle) {
      setShow(false);
    }
    setY(window.scrollY);
  };

  // const handleNavigation = useCallback(scrollHandler, [y]);

  const handleNavigation = useMemo(() => debounce(scrollHandler, 10), [y]);

  useEffect(() => {
    window.addEventListener('scroll', handleNavigation);

    return () => {
      window.removeEventListener('scroll', handleNavigation);
      handleNavigation.cancel();
    };
  }, [handleNavigation]);

  return (
    <div className="relative">
      <div
        className={`fixed ${
          !show || !close ? '-translate-y-full' : ''
        } z-40 flex h-20 w-full flex-wrap content-center justify-between bg-primary px-14 font-bold text-white shadow-2xl transition-all duration-500 md:px-24 lg:px-36 xl:px-48`}
      >
        <img src={logo} className="h-16" />
        <ul className="hidden items-center gap-10 text-lg lg:flex">
          <a
            className="nav-link"
            onClick={() => {
              if (refs.headerRef && refs.headerRef.current)
                refs.headerRef.current.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <li className="uppercase">Home</li>
          </a>
          <a
            className="nav-link"
            onClick={() => {
              if (refs.aboutRef && refs.aboutRef.current) {
                refs.aboutRef.current.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <li className="uppercase">About</li>
          </a>
          <a
            className="nav-link"
            onClick={() => {
              if (refs.portfolioRef && refs.portfolioRef.current) {
                console.log(refs.portfolioRef);
                refs.portfolioRef.current.scrollIntoView({
                  behavior: 'smooth',
                });
              }
            }}
          >
            <li className="uppercase">Projects</li>
          </a>
          <a
            className="nav-link"
            onClick={() => {
              setClose(false);
            }}
          >
            <li className="uppercase">Contact</li>
          </a>
        </ul>
        <div className="flex items-center lg:hidden">
          {toggle ? (
            <IoClose
              className="h-10 w-10 cursor-pointer text-white"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <IoMenu
              className="h-10 w-10 cursor-pointer text-white"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
        {toggle && (
          <div
            className="absolute left-1/2 z-30 h-[100vh] w-full -translate-x-1/2 translate-y-20 bg-primary"
            onClick={() => setToggle(!toggle)}
          >
            <ul className="flex flex-col items-center justify-center text-xl lg:hidden">
              <a
                className="nav-link flex w-full justify-center py-8"
                onClick={() => {
                  if (refs.headerRef && refs.headerRef.current)
                    refs.headerRef.current.scrollIntoView({
                      behavior: 'smooth',
                    });
                }}
              >
                <li className="uppercase">Home</li>
              </a>
              <a
                className="nav-link flex w-full justify-center py-8"
                onClick={() => {
                  if (refs.aboutRef && refs.aboutRef.current) {
                    refs.aboutRef.current.scrollIntoView({
                      behavior: 'smooth',
                    });
                  }
                }}
              >
                <li className="uppercase">About</li>
              </a>
              <a
                className="nav-link flex w-full justify-center py-8"
                onClick={() => {
                  if (refs.aboutRef && refs.portfolioRef.current) {
                    refs.portfolioRef.current.scrollIntoView({
                      behavior: 'smooth',
                    });
                  }
                }}
              >
                <li className="uppercase">Projects</li>
              </a>
              <a
                className="nav-link flex w-full justify-center py-8"
                onClick={() => {
                  setClose(false);
                  if (refs.contactRef && refs.contactRef.current) {
                    refs.contactRef.current.scrollIntoView({
                      behavior: 'smooth',
                    });
                  }
                }}
              >
                <li className="uppercase">Contact</li>
              </a>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
