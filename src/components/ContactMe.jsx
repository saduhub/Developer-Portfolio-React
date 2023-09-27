import React, { useState, useEffect } from 'react';
import './ContactMe.css';
import linkedIn from '/images/linked.png';
import gitHub from '/images/github.png';

function ContactMe( {toggleNavbar} ) {
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
        <section className="contactSectionStyle">
            {isMobile && <button onClick={toggleNavbar} className="buttonStyle">=</button>}
            <div className="contactCardStyle">
                <h4 className="contactH4Style">Reach out!</h4>
                <div className="contactDivStyle">
                    <a href="https://github.com/saduhub" target="_blank"  rel="noopener noreferrer">
                        <img src={gitHub} className="contactImageStyle" alt="GitHub Link" />
                    </a>
                    <a href="https://www.linkedin.com/?trk=guest_homepage-basic_nav-header-logo" target="_blank"  rel="noopener noreferrer">
                        <img src={linkedIn} className="contactImageStyle" alt="LinkedIn Link" />
                    </a>
                </div>
            </div>
        </section>
    );
}
  
export default ContactMe;