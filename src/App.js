import "./App.css";
import "normalize.css";

import About from "./components/About";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
