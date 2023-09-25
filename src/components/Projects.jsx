import songSensei from '/images/songsensei.png';
import tuneStack from '/images/tunestack.png';
import careconnect from '/images/careconnect.png';
import scheduler from '/images/scheduler.png';
import editor from '/images/editor.png';
import weather from '/images/weather.png';

const styles = {
  sectionStyle: {
    backgroundColor: 'black',
  },
  AllProjectsDivStyle: {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center', 
    height: '100%',
  },
  projectDivStyle: {
    margin: '2rem',
    padding: '1rem',
    backgroundColor: 'rgba(30, 30, 30, 0.8)',
    borderRadius: '1rem',
    maxWidth: '20rem'
  },
  imageStyle: {
    maxWidth: '15rem',
    height: 'auto',
    padding: '5px',
    margin: '0px 20px',
    borderRadius: '1rem',
  },
  divStyle: {
    textShadow: '0px 0px 4px var(--purple-font-color)',
    margin: '5rem',
  },
  h2Style: {
    textAlign: 'center',
  },
  pStyle: {
    textAlign: 'center',
    margin: '1rem auto',
    maxWidth: '20rem'
  },
};

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
    <section style={styles.sectionStyle}>
      <div style={styles.AllProjectsDivStyle}>
      {/* Iterate over each project. Create specified html for each project and assign identifying key based on the keys found in projects object. */}
      {Object.keys(projects).map((projectKey) => {
        const project = projects[projectKey];
        return (
          <div key={projectKey} style={styles.projectDivStyle}>
            <h2 style={styles.h2Style}>{project.title}</h2>
            <p style={styles.pStyle}>{project.description}</p>
            <div>
              <a href={project.link}>
                <img src={project.image} alt={`${project.title} screenshot`} style={styles.imageStyle}/>
              </a>
            </div>
          </div>
        );
      })}
      </div>
      <div style={styles.divStyle}>
        <h2 style={styles.h2Style}>Technologies Used</h2>
        <p style={styles.pStyle}>JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, GitHub, MongoDB, MySQL, Express, React, Node, JQuery, Bootstrap, Tailwind CSS, DOM, APIs, JSON, AJAX, OOP, MVC, Sequelize, Jest test suites, git, npm, Mongoose.</p>
      </div>
    </section>
  );
}

export default Projects;
