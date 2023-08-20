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
                <p style={styles.pStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ratione provident corrupti delectus facilis modi nostrum, voluptatum exercitationem repellat rerum ipsam cumque sed eos. Nesciunt nemo dolore distinctio sed incidunt.
                Ratione ex doloremque, a voluptas architecto facere dolorem, voluptatibus possimus corporis deleniti consequuntur culpa in provident ipsam nobis aliquid magnam nisi alias error excepturi! Similique minima veniam blanditiis ut atque.
                Vitae, eius omnis veritatis accusantium repellat nisi ex, qui officia aut dignissimos ea esse est odio iure itaque, reprehenderit pariatur modi quisquam atque minus explicabo illo saepe neque. Tempora, quis.</p>
            </div>
            <div style={styles.imageDivStyle}>
                <img src={profile} alt="Jorge Duarte" style={styles.imageStyle}/>
            </div>
        </section> 
    );
}
  
export default About;