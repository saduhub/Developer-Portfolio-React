import React, { useState, useEffect } from 'react';
import './Projects.css';

import songSensei from '/images/songsensei.png';
import tuneStack from '/images/tunestack.png';
import careconnect from '/images/careconnect.png';
import scheduler from '/images/scheduler.png';
import editor from '/images/editor.png';
import weather from '/images/weather.png';

const projects = {
  songSensei: {
    title: 'SongSensei',
    description: 'Keep up with your favorite artists!',
    link: 'https://saduhub.github.io/SongSensei/',
    image: songSensei,
  },
  tuneStack: {
    title: 'TuneStack',
    description: 'Discover, catalogue, cherish music!',
    link: 'https://tunestack-v1-74649ac6d540.herokuapp.com/login',
    image: tuneStack,
  },
  careConnect: {
    title: 'Care Connect',
    description: 'Care for your community.',
    link: 'https://care-connect-378fa5174d96.herokuapp.com/',
    image: careconnect,
  },
  scheduler: {
    title: 'Personal Scheduler',
    description: 'Plan your whole day!',
    link: 'https://saduhub.github.io/Personal-Scheduler/',
    image: scheduler,
  },
  editor: {
    title: 'Test Editor PWA',
    description: 'Just another text editor.',
    link: 'https://jate-js-793743c34898.herokuapp.com/',
    image: editor,
  },
  weather: {
    title: 'Weather Watch',
    description: 'Check the weather!',
    link: 'https://saduhub.github.io/Weather-Forecast-App/',
    image: weather,
  },
};

function Projects({ toggleNavbar }) {
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
    <section className="projectsSectionStyle">
      {isMobile && <button onClick={toggleNavbar} className="buttonStyle">=</button>}
      <div className="allProjectsDivStyle">
        {Object.keys(projects).map((projectKey) => {
          const project = projects[projectKey];
          return (
            <div key={projectKey} className="projectDivStyle">
              <h2 className="projectH2Style">{project.title}</h2>
              <p className="projectPStyle">{project.description}</p>
              <div>
                <a href={project.link}>
                  <img 
                    className="projectImageStyle"
                    src={ project.image }
                    alt={`${project.title} screenshot`}>
                  </img>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="techDivStyle">
        <h2 className="techH2Style">Technologies Used</h2>
        <p className="techPStyle">
          JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, GitHub, MongoDB, MySQL, Express, React, 
          Node, JQuery, Bootstrap, Tailwind CSS, DOM, APIs, JSON, AJAX, OOP, MVC, Sequelize, 
          Jest test suites, git, npm, Mongoose.
        </p>
      </div>
    </section>
  );
}

export default Projects;
