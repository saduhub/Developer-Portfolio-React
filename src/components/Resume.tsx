// import profile from '../assets/images/react.svg';

const styles = {
    sectionStyle: {
      backgroundColor: 'black',
      marginTop: '10rem',
      textAlign: 'center',
    },
    divStyle: {
      textShadow: '0px 0px 4px var(--purple-font-color)',
    },
    h3Style: {
      textAlign: 'center',
    },
};
  
function Resume() {
    return (
        <section style={styles.sectionStyle} >
            <div style={styles.divStyle}>
                <h3 style={styles.h3Style}>Resume</h3>
                <ul>
                    <li>Lorem ipsum, dolor sit amet consectetur.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur.</li>
                </ul>
            </div>
        </section> 
    );
}
  
export default Resume;