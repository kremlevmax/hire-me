import "./App.css";
import "normalize.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import About from "./components/About";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";

function App() {
  const location = useLocation();
  // console.log(location.pathname);
  return (
    <div className='App'>
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<Navbar />}>
            <Route path='/' element={<About />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contacts' element={<Contacts />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
