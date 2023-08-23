// No more anchor tags. React Link component for seamless navigation
import { Link } from "react-router-dom";

const styles = {
  headerStyle: {
    justifyContent: 'space-around',
    position: 'fixed',
    width: '100vw',
    top: '0',
    zIndex: '2',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  iconStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '2rem',
    textShadow: '0px 0px 4px var(--purple-font-color)',
    textDecoration: 'none', 
    margin: '1rem auto 0rem',
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

const tabs = {
    aboutMe: {
      title: 'About Me',
      link: '/about',
    },
    portfolio: {
      title: 'Portfolio',
      link: '/projects'
    },
    contact: {
      title: 'Contact',
      link: '/contact',
    },
    resume: {
      title: 'Resume',
      link: '/resume',
    },
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
            {Object.keys(tabs).map((tabKey) => {
                const tab = tabs[tabKey];
                return (
                    <li style={styles.liStyle}>
                        <Link to={tab.link} style={styles.linkStyle}>
                        {tab.title}
                        </Link>
                    </li>
                );
            })}
            </ul>
        </nav>
    </header>
    
  );
}

export default Navbar;