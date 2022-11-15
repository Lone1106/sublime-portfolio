import classes from "./About.module.css";

function About() {
    return (
        <section className={classes.about}>
            <h2>About me, myself and I</h2>
            <p className={classes.text}>
                Based in southern germany. 2017-2021 apprenticeship as media
                designer dtp focusing on prepress. Since 03/2021 working as
                prepress operator. Learning about web technologies and python as
                well as japanese language and culture in my free time.
            </p>
            <figure className={classes.skillItem}>
                <h3>Technologies</h3>
                <div className={classes.skills}>
                    <span className={classes.red}>HTML</span>
                    <span className={classes.blue}>CSS</span>
                    <span className={classes.purple}>Sass</span>
                    <span className={classes.yellow}>Javascript</span>
                    <span className={classes.purple}>React</span>
                    <span className={classes.blue}>Git</span>
                    <span className={classes.grey}>Wordpress</span>
                    <span className={classes.red}>Elementor</span>
                    <span className={classes.grey}>Prepress</span>
                    <span className={classes.blue}>Python</span>
                </div>
            </figure>

            <figure className={classes.skillItem}>
                <h3>Software</h3>
                <div className={classes.skills}>
                    <span className={classes.blue}>Adobe PS</span>
                    <span className={classes.red}>Packedge</span>
                    <span className={classes.yellow}>Adobe AI</span>
                </div>
            </figure>

            <figure className={classes.skillItem}>
                <h3>Languages</h3>
                <div className={classes.skills}>
                    <span className={classes.yellow}>German (n)</span>
                    <span className={classes.blue}>English (C1)</span>
                    <span className={classes.red}>Japanese (N3)</span>
                </div>
            </figure>

            <figure className={classes.skillItem}>
                <h3>other Skills</h3>
                <div className={classes.skills}>
                    <span className={classes.grey}>Prepress</span>
                    <span className={classes.green}>Proof reading</span>
                    <span className={classes.purple}>CTP</span>
                    <span className={classes.purple}>Color correction</span>
                </div>
            </figure>
        </section>
    );
}

export default About;
