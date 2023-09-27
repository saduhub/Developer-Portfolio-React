import React from 'react';
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
    description: 'Plan, volunteer, and coordinate assistance within your community.',
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
    description: 'Weather app using Open Weather API',
    link: 'https://saduhub.github.io/Weather-Forecast-App/',
    image: weather,
  },
};

function Projects() {
  return (
    <section className="projectsSectionStyle">
      <div className="projectsAllProjectsDivStyle">
        {Object.keys(projects).map((projectKey) => {
          const project = projects[projectKey];
          return (
            <div key={projectKey} className="projectsProjectDivStyle">
              <h2 className="projectsH2Style">{project.title}</h2>
              <p className="projectsPStyle">{project.description}</p>
              <div>
                <a href={project.link}>
                  <div 
                    className="projectsImageStyle"
                    style={{ backgroundImage: `url(${project.image})` }}
                    alt={`${project.title} screenshot`}>
                  </div>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="projectsDivStyle">
        <h2 className="projectsH2Style">Technologies Used</h2>
        <p className="projectsPStyle">
          JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, GitHub, MongoDB, MySQL, Express, React, 
          Node, JQuery, Bootstrap, Tailwind CSS, DOM, APIs, JSON, AJAX, OOP, MVC, Sequelize, 
          Jest test suites, git, npm, Mongoose.
        </p>
      </div>
    </section>
  );
}

export default Projects;
