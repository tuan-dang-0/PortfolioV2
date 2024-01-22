import { useEffect, useRef, useState } from 'react';
import Contact from './components/contact/Contact';
import NavBar from './components/NavBar';
import Header from './components/header/Header';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Tech from './components/tech/Tech';
import Footer from './components/footer/Footer';
import Loader from './components/Loader';

function App() {
  const preloader = document.getElementById('preloader');
  preloader?.classList.add('slideUp');
  const headerRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  const [close, setClose] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      loaderRef?.current?.classList.add('opacity-0');
      setTimeout(() => {
        loaderRef?.current?.classList.add('hidden');
      }, 500);
    }, 1000);
  }, []);

  const handleClose = () => {
    setClose(true);
  };

  const [refs, setRefs] = useState({
    headerRef,
    aboutRef,
    portfolioRef,
    contactRef,
  });

  useEffect(() => {
    setRefs({ headerRef, aboutRef, portfolioRef, contactRef });
  }, [headerRef, aboutRef, portfolioRef, contactRef]);

  return (
    <div className="overflow:hidden mx-auto w-full bg-primary">
      <Loader ref={loaderRef} />
      <Contact ref={contactRef} close={close} handleClose={handleClose} />
      <NavBar refs={refs} close={close} setClose={setClose} />
      <Header ref={headerRef} refs={refs} setClose={setClose} />
      <About ref={aboutRef} />
      <Portfolio ref={portfolioRef} />
      <Tech />
      <Footer setClose={setClose} />
    </div>
  );
}

export default App;
