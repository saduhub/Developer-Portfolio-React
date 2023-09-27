import React, { useState, useEffect } from 'react';
import './About.css';
import profile from '/images/profile.png';

function About({ toggleNavbar }) {
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
        <section className="aboutSectionStyle">
            {isMobile && <button onClick={toggleNavbar} className="buttonStyle">=</button>}
            <div className="aboutDivStyle">
                <h3 className="aboutH3Style">About me</h3>
                <p className="aboutPStyle">
                  Hello! I'm a budding full-stack developer taking my first steps into the exciting world of web development. While I may be at the start of my journey, I bring a strong work ethic, creative flair, and ambition to the table.As someone who's transitioning their programming hobby into a full-time career, I can say with enthusiasm that I'm truly excited about the possibilities. My dedication to programming has evolved from a pastime into a passion for programming, new technologies, and the world of development. When I'm not coding, you'll find me chasing platinum trophies or cheering on my favorite sports teams. I describe myself as a student first and with each line of code, I'm excited to create an application better than the one before. My eagerness to learn and adapt helps me stay on top of industry trends and write code that I hope will improve user experience. I'm excited about the path ahead, and I'm confident in my ability to grow and contribute to the community. Let's connect and explore the exciting possibilities that lie ahead!
                </p>
            </div>
            <div className="aboutImageDivStyle">
                <img 
                    className="aboutImageStyle"
                    src={profile}
                    alt="Jorge Duarte">
                </img>
            </div>
        </section> 
    );
}
  
export default About;