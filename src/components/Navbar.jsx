import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const styles = {
  ulStyle: (isMobile) => ({
    textAlign: 'center',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
  }),
  liStyle: {
    margin: '1rem 0',
  },
  linkStyle: {
    textDecoration: 'none',
    color: 'white',
  },
  navbarStyle: {},
  contactStyle: {},
};

function Navbar() {

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
    <nav style={styles.navbarStyle}>
        <ul style={styles.ulStyle(isMobile)}>
          <li style={styles.liStyle}>
            <Link to="/" style={styles.linkStyle}>
              Jorge Duarte
            </Link>
          </li>
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
            <Link to="/contact" style={styles.linkStyle}>
              Contact Me
            </Link>
          </li>
        </ul>
    </nav>
  );
}

export default Navbar;