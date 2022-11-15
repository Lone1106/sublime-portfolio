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
                        "Javascript and python dev",
                        "Always learning new stuff",
                        "Foreign language enthusiastic"
                    ]}
                    loop
                    typeSpeed={60}
                    backSpeed={30}
                />
                <div className={classes.buttons}>
                    <Link to="/contact" className={classes.link}>
                        Contact
                    </Link>
                    <Link to="/work" className={classes.link}>
                        Work
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Home;
