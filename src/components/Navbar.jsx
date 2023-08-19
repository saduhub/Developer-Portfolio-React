// No more anchor tags. React Link component for seamless navigation
import { Link } from "react-router-dom";

const styles = {
  headerStyle: {
    // display: 'flex',
    // flexDirection: 'column',
    justifyContent: 'space-around',
    position: 'fixed',
    width: '100vw',
    top: '0',
    zIndex: '2',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    // padding: '1rem',
  },
  // navbarStyle: {
  //   background: 'black',
  //   color: 'white',
  // },
  // paragraphStyle: {

  // },
  iconStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // marginLeft: 'var(--standard-margin)',
    color: 'white',
    fontSize: '2rem',
    textShadow: '0px 0px 4px var(--purple-font-color)',
    textDecoration: 'none', 
    margin: 'auto',
  },
  ulStyle: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  liStyle: {
    display: 'flex',
    margin: 'var(--standard-margin)',
    textDecoration: 'none',
  },
  linkStyle: {
    fontSize: '1rem',
    color: 'var(--teal-font-color)',
    textDecoration: 'none',
    textShadow: '0px 0px 3px var(--green-font-color)',
  },
  contactStyle: {
    fontSize: '1rem',
    color: 'var(--yellow-font-color)',
    textDecoration: 'none',
    textShadow: '0px 0px 3px var(--yellow-font-color)',
    textAlign: 'center',
  }
};

function Navbar() {
  return (
    <header style={styles.headerStyle}>
        <div>
            <p>
              <Link to="/" style={styles.iconStyle}>
                JD
              </Link>
            </p>
        </div>
        <nav style={styles.navbarStyle}>
            <ul style={styles.ulStyle}>
              <li style={styles.liStyle}>
                <Link to="/projects" style={styles.linkStyle}>
                  Projects
                </Link>
              </li>
              <li style={styles.liStyle}>
                <Link to="/about" style={styles.linkStyle}>
                  About
                </Link>
              </li>
              <li style={styles.liStyle}>
                <Link to="/contact" style={styles.contactStyle}>
                  Contact Me
                </Link>
              </li>
            </ul>
        </nav>
    </header>
    
  );
}

export default Navbar;