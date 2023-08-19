const styles = {
    sectionStyle: {
      backgroundColor: 'blue',
    },
};
  
function Projects() {
    return (
        <section style={styles.sectionStyle}>
            <div>
                <h2>SongSensei</h2>
                <p>Keep up with your favorite artists</p>
                <div>
                    <a href="https://saduhub.github.io/SongSensei/">
                        <img src="" alt="SongSensei website screenshot"/>
                    </a>
                </div>
            </div>
            <div>
                <h2>TuneStack</h2>
                <p>Discover, catalogue, cherish music!</p>
                <div>
                    <a href="https://tunestack-v1-74649ac6d540.herokuapp.com/login">
                        <img src="" alt="vintage cashier"/>
                    </a>
                </div>
            </div>
            <div >
                <h2>Project 3</h2>
                <p>Geometry drawing tool</p>
                <div>
                    <a href="https://github.com/saduhub">
                        <img src="" alt="picture of two compasses (used for drawing circles/arcs)"/>
                    </a>
                </div>
            </div>
            <div >
                <h2>Technologies Used</h2>
                <p>HTML, CSS, JavaScript, Git, Bootstrap, React, Node.js, Express.js, and MongoDB.</p>
            </div>
        </section>
    );
}
  
export default Projects;