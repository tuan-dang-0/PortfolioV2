import NavBar from './components/NavBar';
import Header from './components/header/Header';
import About from './components/about/About';
function App() {
  return (
    <div className="mx-auto w-full bg-primary">
      <NavBar />
      <Header />
      <About />
    </div>
  );
}

export default App;
