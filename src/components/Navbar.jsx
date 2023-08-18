const styles = {
  navbarStyle: {
    background: 'black',
  },
  navbarText: {
    color: 'white',
  },
};

function Navbar() {
  return (
    <nav style={styles.navbarStyle} className="navbar">
      <h1 style={styles.navbarText}>Test</h1>
    </nav>
  );
}

export default Navbar;