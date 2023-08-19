const styles = {
    sectionStyle: {
      backgroundColor: 'green',
    },
};
  
function ContactMe() {
    return (
        <section style={styles.sectionStyle}>
            <h4>Reach out!</h4>
            <div >
                <a href="https://github.com/saduhub"><img src=""/></a>
                <a href="https://www.linkedin.com/?trk=guest_homepage-basic_nav-header-logo"><img src=""/></a>
            </div>
        </section>
    );
}
  
export default ContactMe;