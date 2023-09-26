import React, { useState, useEffect } from 'react';

const styles = {
    parentDivStyle: {
        textAlign: 'center',
    },
    sectionStyle: {
        backgroundColor: 'black',
        margin: '1rem 1rem 0 1rem',
        borderRadius: '1rem',
        padding: '1rem',
    },
    descriptionStyle: {
        textAlign: 'center',
    },
    nameStyle: {
        textAlign: 'center',
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: '20px'
    },
    imageStyle: (index) => ({
        width: '50px',
        height: '50px',
        margin: '5px',
        opacity: 0,
        animation: `fadeInRotate 4s ${index * 0.4}s forwards`,
        objectFit: 'cover',
    }),
    buttonStyle: {
        backgroundColor: 'transparent',
        border: 'none',
        color: 'white',
        fontSize: '24px', 
        letterSpacing: '2px',
        margin: '2rem auto'
    },
};

const keyframes = `
  @keyframes fadeInRotate {
      0% { opacity: 0; transform: rotate(0deg); }
      50% { opacity: 0.5; }
      100% { opacity: 1; transform: rotate(360deg); }
  }
`;

const techImages = [
    '/images/mongodb.png',
    '/images/mysql.png',
    '/images/node-js.png',
    '/images/graphql.png',
    '/images/express.svg',
    '/images/react.png',
    '/images/tailwind-css.svg',
    '/images/heroku.png',
    // '/images/jquery.png',
    // '/images/python.png',
];

function Landing({ toggleNavbar }) {
    const [text, setText] = useState('');
    const fullText = "Hello! My name is Jorge Duarte and I am a full-stack application developer";
    
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
        <div style={styles.parentDivStyle}>
            <style>{keyframes}</style>
            <button onClick={toggleNavbar} style={styles.buttonStyle}>JD</button>
            
            <section style={styles.sectionStyle}>
                <p style={styles.descriptionStyle}>{text}</p>

                <div style={styles.imageContainer}>
                    {techImages.map((src, index) => (
                        <img key={index} src={src} alt={`Tech ${index + 1}`} style={styles.imageStyle(index)} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Landing;