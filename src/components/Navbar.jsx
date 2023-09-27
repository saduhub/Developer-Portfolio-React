import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ onClose }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 450);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav>
      <ul className={`ulStyle ${isMobile ? 'mobile' : ''}`}>
        <li className="liStyle">
          <Link to="/" className="linkStyle">
            Jorge Duarte
          </Link>
        </li>
        <li className="liStyle">
          <Link to="/projects" className="linkStyle">
            Projects
          </Link>
        </li>
        <li className="liStyle">
          <Link to="/about" className="linkStyle">
            About
          </Link>
        </li>
        <li className="liStyle">
          <Link to="/contact" className="linkStyle">
            Contact Me
          </Link>
        </li>
        {isMobile && (
          <li>
            <button className="closeButton" onClick={onClose}>
              X
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;