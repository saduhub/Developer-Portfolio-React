import profile from '../assets/images/profile.png';

const styles = {
    sectionStyle: {
      backgroundColor: 'black',
      marginTop: '10rem',
    },
    divStyle: {
      textShadow: '0px 0px 4px var(--purple-font-color)',
    },
    h3Style: {
      textAlign: 'center',
    },
    pStyle: {
      textAlign: 'center',
      margin: '1rem 5rem',
    },
    imageDivStyle: {
        display: 'flex',
        padding: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        maxWidth: '15rem',
        height: 'auto',
        padding: '5px',
        margin: '0px 20px',
        borderRadius: '1rem',
    },
};
  
function About() {
    return (
        <section style={styles.sectionStyle} >
            <div style={styles.divStyle}>
                <h3 style={styles.h3Style}>About me</h3>
                <p style={styles.pStyle}>Hello! I'm a budding full-stack developer taking my first steps into the exciting world of web development. While I may be at the start of my journey, I bring a strong work ethic, creative flair, and ambition to the table.As someone who's transitioning their programming hobby into a full-time career, I can say with enthusiasm that I'm truly excited about the possibilities. My dedication to programming has evolved from a pastime into a passion for programming, new technologies, and the world of development. When I'm not coding, you'll find me chasing platinum trophies or cheering on my favorite sports teams. I describe myself as a student first and with each line of code, I'm excited to create an application better than the one before. My eagerness to learn and adapt helps me stay on top of industry trends and write code that I hope will improve user experience. I'm excited about the path ahead, and I'm confident in my ability to grow and contribute to the community. Let's connect and explore the exciting possibilities that lie ahead!</p>
            </div>
            <div style={styles.imageDivStyle}>
                <img src={profile} alt="Jorge Duarte" style={styles.imageStyle}/>
            </div>
        </section> 
    );
}
  
export default About;