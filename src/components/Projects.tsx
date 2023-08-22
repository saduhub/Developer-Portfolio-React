// import songSensei from '../assets/images/songsensei.png';
// import tuneStack from '../assets/images/tunestack.png';
// import geometry from '../assets/images/geometry.jpg';
import pic from '../assets/images/react.svg';

const styles = {
  sectionStyle: {
    backgroundColor: 'black',
    marginTop: '10rem',
  },
  projectDivStyle: {
    margin: '2rem',
    padding: '1rem',
    backgroundColor: 'gray',
    borderRadius: '1rem',
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
    marginBottom: '5rem',
  },
  h2Style: {
    textAlign: 'center',
  },
  pStyle: {
    textAlign: 'center',
    margin: '1rem 5rem',
  },
};

const projects = {
  songSensei: {
    title: 'SongSensei',
    description: 'Keep up with your favorite artists!',
    link: 'https://saduhub.github.io/SongSensei/',
    image: pic,
  },
  tuneStack: {
    title: 'TuneStack',
    description: 'Discover, catalogue, cherish music!',
    link: 'https://tunestack-v1-74649ac6d540.herokuapp.com/login',
    image: pic,
  },
  Project3: {
    title: 'Project 3',
    description: 'Geometry drawing tool',
    link: 'https://github.com/saduhub',
    image: pic,
  },
};

function Projects() {
  return (
    <section style={styles.sectionStyle}>
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
      <div style={styles.divStyle}>
        <h2 style={styles.h2Style}>Technologies Used</h2>
        <p style={styles.pStyle}>HTML, CSS, JavaScript, Git, Bootstrap, React, Node.js, Express.js, and MongoDB.</p>
      </div>
    </section>
  );
}

export default Projects;