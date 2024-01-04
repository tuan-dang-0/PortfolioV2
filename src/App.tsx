import NavBar from './components/NavBar';
import Header from './components/header/Header';
import About from './components/about/About';
function App() {
  return (
    <div className="mx-auto w-full bg-primary">
      <NavBar />
      <Header />
      <About />
      <div className="h-96 w-screen bg-black">""</div>
    </div>
  );
}

export default App;
