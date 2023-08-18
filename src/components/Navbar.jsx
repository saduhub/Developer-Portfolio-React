const styles = {
  headerStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'fixed',
    width: '100vw',
    top: '0',
    zIndex: '2',
    backgroundColor: 'rgba(50, 50, 50, 0.9)',
    padding: '0 var(--standard-padding)',
  },
  navbarStyle: {
    background: 'black',
  },
  navbarText: {
    color: 'white',
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'var(--standard-margin)',
    color: 'white',
    fontSize: '2rem',
    textShadow: '0px 0px 4px var(--purple-font-color)',
    textDecoration: 'none', 
  },
};

function Navbar() {
  return (
    <header style={styles.headerStyle}>
        <div>
            <p><a href="#home" style={styles.icon}>JD</a></p>
        </div>
        <nav style={styles.navbarStyle}>
            <ul>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact Me</a></li>
            </ul>
        </nav>
    </header>
    
  );
}

export default Navbar;