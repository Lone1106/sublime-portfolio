import classes from "./About.module.css";
import "../../Colors.css";

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
                    <span className="red">HTML</span>
                    <span className="blue">CSS</span>
                    <span className="purple">Sass</span>
                    <span className="yellow">Javascript</span>
                    <span className="purple">React</span>
                    <span className="blue">Git</span>
                    <span className="grey">Wordpress</span>
                    <span className="red">Elementor</span>
                    <span className="blue">Python</span>
                </div>
            </figure>

            <figure className={classes.skillItem}>
                <h3>Software</h3>
                <div className={classes.skills}>
                    <span className="blue">Adobe PS</span>
                    <span className="red">Packedge</span>
                    <span className="yellow">Adobe AI</span>
                </div>
            </figure>

            <figure className={classes.skillItem}>
                <h3>Languages</h3>
                <div className={classes.skills}>
                    <span className="yellow">German (n)</span>
                    <span className="blue">English (C1)</span>
                    <span className="red">Japanese (N3)</span>
                </div>
            </figure>

            <figure className={classes.skillItem}>
                <h3>other Skills</h3>
                <div className={classes.skills}>
                    <span className="grey">Prepress</span>
                    <span className="green">Proof reading</span>
                    <span className="purple">CTP</span>
                </div>
            </figure>
        </section>
    );
}

export default About;
