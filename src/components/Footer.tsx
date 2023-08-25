import gitHub from "../assets/images/github.png"
import linkedIn from "../assets/images/linked.png"

const styles = {
  footerStyle: {
    justifyContent: 'space-around',
    width: '100vw',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0)',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
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
  },
};

function Footer() {
  return (
    <footer style={styles.footerStyle}>
        <div>
          <div style={styles.linkDivStyle}>
              <a href="https://github.com/saduhub" target="_blank"  rel="noopener noreferrer"><img src={gitHub} style={styles.imageStyle}/></a>
              <a href="https://www.linkedin.com/?trk=guest_homepage-basic_nav-header-logo" target="_blank"  rel="noopener noreferrer"><img src={linkedIn} style={styles.imageStyle}/></a>
          </div>
          <h5>© Made by Jorge 2023. Brap.</h5>
        </div>
    </footer>
  );
}

export default Footer;