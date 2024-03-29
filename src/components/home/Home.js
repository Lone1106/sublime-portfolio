import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

import classes from "./Home.module.css";

function Home() {
  return (
    <section className={classes.home}>
      <div>
        <h1>Jan Reichherzer</h1>
        <span className={classes.job}>
          <Typewriter
            options={{
              strings: [
                "Aspiring UI Designer and Web dev",
                "Media designer Prepress",
                "Interested in foreign languages",
                "Always learning about new stuff",
              ],
              autoStart: true,
              loop: true,
              delay: "0.1",
              pauseFor: 2000,
            }}
          />
        </span>
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
