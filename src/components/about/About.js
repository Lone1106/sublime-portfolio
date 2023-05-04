import classes from "./About.module.css";

import Item from "./Item";
import Data from "./Data";

function About() {
    return (
        <section className={classes.about}>
            <h2>About me, myself and I</h2>
            <p className={classes.text}>
                Based in southern germany. 2017-2021 apprenticeship as media
                designer dtp focusing on prepress. Since 03/2021 working as
                prepress operator. Learning about web technologies and python as
                well as foreign languages and cultures in my free time.
            </p>

            {Data.map((el) => {
                return <Item title={el.title} items={el.items} />;
            })}
        </section>
    );
}

export default About;
