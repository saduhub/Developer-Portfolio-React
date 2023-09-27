import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";

function Routing() {
    const location = useLocation();
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [navbarVisible, setNavbarVisible] = useState(true); 
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 450);

    const navbarStyles = {
        transition: 'top 1s ease',
        position: 'fixed',
        top: 0,
        width: '100%',
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(50, 50, 50, 0.2)',
        zIndex: 1000,
    };

    const hiddenNavbarStyles = {
        ...navbarStyles,
        top: '-120%',
    };

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <= 450);
        };
        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.scrollY;
    
            if (currentScrollTop <= 0) {
                setNavbarVisible(true);
            } else if (currentScrollTop > lastScrollTop) {
                setNavbarVisible(false);
            } else {
                setNavbarVisible(true);
            }
    
            setLastScrollTop(currentScrollTop);
        };
    
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    useEffect(() => {
        if (isMobile) {
        setNavbarVisible(false);
        }
    }, [location.pathname, isMobile]);

    const toggleNavbar = () => {
        setNavbarVisible(prevVisible => !prevVisible);
    };

    return (
        <>
        <div style={navbarVisible ? navbarStyles : hiddenNavbarStyles}>
            <Navbar onClose={() => setNavbarVisible(false)} />
        </div>
        <Routes>
            <Route path="/" element={<Landing toggleNavbar={toggleNavbar} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Routing />
        </BrowserRouter>
    );
}

export default App;