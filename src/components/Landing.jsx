const styles = {
    sectionStyle: {
      backgroundColor: 'pink',
    },
};
  
function Landing() {
    return (
        <div style={styles.sectionStyle}>
            <div>
                <img src="" alt="RGB-lit keyboard"/>
            </div>
            <p>Hello! My name is</p>
            <h1>Jorge Duarte</h1>
            <p>and I am a</p>
            <p>full-stack application developer</p>
        </div>
    );
}
  
export default Landing;