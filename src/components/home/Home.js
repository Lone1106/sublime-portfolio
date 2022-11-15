import { Link } from "react-router-dom";
import Typed from "react-typed";

import classes from "./Home.module.css";

function Home() {
    return (
        <section className={classes.home}>
            <div>
                <h1>Jan Reichherzer</h1>
                <Typed
                    className={classes.job}
                    strings={[
                        "Media designer DTP",
                        "Prepress operator",
                        "Free time javascript and python dev",
                        "Interested in learning new stuff",
                        "Foreign langauge enthusiastic"
                    ]}
                    loop
                    typeSpeed={60}
                    backSpeed={30}
                />
                <div className={classes.buttons}>
                    <Link to="/contact" className={classes.link}>
                        Contact
                    </Link>
                    <Link to="/projects" className={classes.link}>
                        Work
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Home;
