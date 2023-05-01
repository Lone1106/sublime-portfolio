import classes from "./About.module.css";

import Item from "./Item";
import {skills, software, languages, other} from "./Data.js";

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
            <Item
                title="Technologies"
                items={skills}
            />

            <Item
                title="Software"
                items={software}
            />

            <Item
                title="Languages"
                items={languages}
            />

            <Item
                title="other Skills"
                items={other}
            />
        </section>
    );
}

export default About;
