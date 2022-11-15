import classes from "./Projects.module.css";
import Placeholder from "./img/Placeholder.png";

function Projects() {
    return (
        <section className={classes.projects}>
            <h2>See my recent work</h2>
            <figure className={classes.workItems}>
                <div className={classes.work}>
                    <img
                        className={classes.image}
                        src={Placeholder}
                        alt="Mockup"
                        loading="lazy"
                    />
                    <div className={classes.info}>
                        <h4>Flashcard App</h4>
                        <p className={classes.tech}>
                            HTML, CSS, React, Firebase
                        </p>
                        <div className={classes.links}>
                            <a
                                className={classes.link}
                                href="https://github.com/Lone1106/flashcard-app"
                            >
                                Github
                            </a>
                            <a
                                className={classes.link}
                                href="https://harmonious-platypus-6d8124.netlify.app/home"
                            >
                                Demo
                            </a>
                        </div>
                    </div>
                </div>

                <div className={classes.work}>
                    <img
                        className={classes.image}
                        src={Placeholder}
                        alt="Mockup"
                        loading="lazy"
                    />
                    <div className={classes.info}>
                        <h4>Flashcard App</h4>
                        <p className={classes.tech}>
                            HTML, CSS, React, Firebase
                        </p>
                        <div className={classes.links}>
                            <a
                                className={classes.link}
                                href="https://github.com/Lone1106/flashcard-app"
                            >
                                Github
                            </a>
                            <a
                                className={classes.link}
                                href="https://harmonious-platypus-6d8124.netlify.app/home"
                            >
                                Demo
                            </a>
                        </div>
                    </div>
                </div>

                <div className={classes.work}>
                    <img
                        className={classes.image}
                        src={Placeholder}
                        alt="Mockup"
                        loading="lazy"
                    />
                    <div className={classes.info}>
                        <h4>Flashcard App</h4>
                        <p className={classes.tech}>
                            HTML, CSS, React, Firebase
                        </p>
                        <div className={classes.links}>
                            <a
                                className={classes.link}
                                href="https://github.com/Lone1106/flashcard-app"
                            >
                                Github
                            </a>
                            <a
                                className={classes.link}
                                href="https://harmonious-platypus-6d8124.netlify.app/home"
                            >
                                Demo
                            </a>
                        </div>
                    </div>
                </div>
            </figure>
        </section>
    );
}

export default Projects;
