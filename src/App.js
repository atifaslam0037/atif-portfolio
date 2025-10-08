import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import VantaBackground from './components/VantaBackground';

function App() {
  return (
    <>
      
      <Navbar />
      <Home />
      <About />
      <VantaBackground />
      <Skills />
      <Work />
      <Contact />
    </>
  );
}

export default App;
