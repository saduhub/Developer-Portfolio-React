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
};

function Footer() {
  return (
    <footer style={styles.footerStyle}>
        <div>
            <h5>© Made by Jorge 2023. Brap.</h5>
        </div>
    </footer>
  );
}

export default Footer;