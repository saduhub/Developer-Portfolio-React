// import entrance from '../assets/images/entrance.jpg';

const styles = {
    sectionStyle: {
    //   backgroundColor: 'black',
      paddingTop: '10rem',
      marginLeft: '1rem',
      marginRight: '1rem',
      borderRadius: '1rem',
    },
    descriptionStyle: {
        color: '#FFA500',
        textAlign: 'center',
    },
    nameStyle: {
        textAlign: 'center',
    },
    // imageContainerStyle: {
    //     width: '100%',
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     // overflow: 'hidden',
    // },
    // imageStyle: {
    //     width: '120%',
    //     height: '100%',
    //     objectFit: 'fill',
    // }
};
  
function Landing() {
    return (
        < section style={styles.sectionStyle}>
            {/* <div style={styles.imageContainer}>
                <img src={entrance} alt="RGB-lit keyboard" style={styles.imageStyle}/>
            </div> */}
            <p style={styles.descriptionStyle}>Hello! My name is</p>
            <h1 style={styles.nameStyle}>Jorge Duarte</h1>
            <p style={styles.descriptionStyle}>and I am a</p>
            <p style={styles.descriptionStyle}>full-stack application developer</p>
        </section>
    );
}
  
export default Landing;