import React, { useState, useEffect } from 'react';
import './Landing.css';

const techImages = [
    '/Developer-Portfolio-React/images/mongodb.png',
    '/Developer-Portfolio-React/images/mysql.png',
    '/Developer-Portfolio-React/images/node-js.png',
    '/Developer-Portfolio-React/images/graphql.png',
    '/Developer-Portfolio-React/images/express.svg',
    '/Developer-Portfolio-React/images/react.png',
    '/Developer-Portfolio-React/images/tailwind-css.svg',
    '/Developer-Portfolio-React/images/heroku.png',
];

function Landing({ toggleNavbar }) {
    const [text, setText] = useState('');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 450);
    const fullText = "Hello! My name is Jorge Duarte and I am a full-stack application developer";
    
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
        const typeText = () => {
            if (text.length < fullText.length) {
                setText(fullText.slice(0, text.length + 1));
            } else {
                clearInterval(typingInterval);
            }
        };
        const typingInterval = setInterval(typeText, 20);
        return () => clearInterval(typingInterval);
    }, [text]);
    
    return (
        <div className="parentDivStyle">
            {isMobile && <button onClick={toggleNavbar} className="buttonStyle">=</button>}
            
            <section className="sectionStyle">
                <p className="descriptionStyle">{text}</p>

                <div className="imageContainer">
                    {techImages.map((src, index) => (
                        <img 
                            key={index} 
                            src={src} 
                            alt={`Tech ${index + 1}`} 
                            className="imageStyle" 
                            style={{ animation: `fadeInRotate 4s ${index * 0.4}s forwards` }}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Landing;