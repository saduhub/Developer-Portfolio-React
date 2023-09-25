import linkedIn from '../assets/images/linked.png';
import gitHub from '../assets/images/github.png';

const styles = {
    sectionStyle: {
    //   backgroundColor: 'black',
      marginTop: '10rem',
    },
    h4Style: {
        textAlign: 'center',
        fontSize: '2rem',
        color: 'var(--yellow-font-color)',
        textShadow: '0px 0px 3px var(--yellow-font-color)',
    },
    linkDivStyle: {
        display: 'flex',
        padding: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        maxWidth: '80px',
        height: 'auto',
        padding: '5px',
        margin: '0px 20px',
    }
};
  
function ContactMe() {
    return (
        <section style={styles.sectionStyle}>
            <h4 style={styles.h4Style}>Reach out!</h4>
            <div style={styles.linkDivStyle}>
                <a href="https://github.com/saduhub" target="_blank"  rel="noopener noreferrer"><img src={gitHub} style={styles.imageStyle}/></a>
                <a href="https://www.linkedin.com/?trk=guest_homepage-basic_nav-header-logo" target="_blank"  rel="noopener noreferrer"><img src={linkedIn} style={styles.imageStyle}/></a>
            </div>
        </section>
    );
}
  
export default ContactMe;