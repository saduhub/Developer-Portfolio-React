import { Link } from "react-router-dom";

const styles = {
  ulStyle: {
    padding: 0,
    textAlign: 'center', 
  },
  liStyle: {
    margin: '1rem 0' 
  },
  linkStyle: {
    textDecoration: 'none', 
    color: 'inherit'  
  },
  navbarStyle: {
    
  },
  contactStyle: {
    
  }
};

function Navbar() {
  return (
    <nav style={styles.navbarStyle}>
        <ul style={styles.ulStyle}>
          <li style={styles.liStyle}>
            <Link to="/about" style={styles.linkStyle}>
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