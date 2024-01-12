import NavBar from './components/NavBar';
import Header from './components/header/Header';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Tech from './components/tech/Tech';
function App() {
  return (
    <div className="mx-auto w-full bg-primary">
      <NavBar />
      <Header />
      <About />
      <Portfolio />
      <Tech />
      <div className="h-96 w-screen bg-white"></div>
    </div>
  );
}

export default App;
