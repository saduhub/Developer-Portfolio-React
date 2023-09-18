// import { ButtonDemo } from './components/Button'
import { useEffect, useState } from 'react'
import './App.css'
// Import to be able to use routing.
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import About from "./components/About"
import ContactMe from "./components/ContactMe"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Perform initial navigation */}
        <Navigation/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

function Navigation() {
  // Use method from react-router-dom to navigate to a specific url.
  const navigateTo = useNavigate();
  // useState to store initial value of navigatedToLanding and updater function to update navigatedToLanding when it is true. 
  const [navigatedToLanding, navigationComplete] = useState(false);
  // Hook used to manipulate value of navigatedToLanding by checking the value of navigatedToLanding as specified in the array.
  useEffect(() => {
    if (!navigatedToLanding) {
      navigateTo('/');
      navigationComplete(true);
    }
  }, [navigatedToLanding, navigateTo]);
  // Nothing rendered
  return null;
}

export default App
