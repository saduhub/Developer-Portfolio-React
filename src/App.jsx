// Import to be able to use routing.
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import About from "./components/About"
import ContactMe from "./components/ContactMe"
import Projects from "./components/Projects"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
