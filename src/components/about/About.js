import classes from "./About.module.css";

import Item from "./Item";

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
                items={[
                    ["HTML", "red"],
                    ["CSS", "blue"],
                    ["Sass", "purple"],
                    ["Javascript", "yellow"],
                    ["React", "green"],
                    ["Git", "grey"],
                    ["Wordpress", "blue"],
                    ["Elementor", "red"],
                    ["Python", "blue"],
                ]}
            />

            <Item
                title="Software"
                items={[
                    ["Adobe PS", "blue"],
                    ["Packedge", "red"],
                    ["Adobe AI", "yellow"],
                ]}
            />

            <Item
                title="Languages"
                items={[
                    ["German (N)", "yellow"],
                    ["English (C1)", "blue"],
                    ["Japanese (N3)", "red"],
                ]}
            />

            <Item
                title="other Skills"
                items={[
                    ["Prepress", "grey"],
                    ["Proof reading", "green"],
                    ["CTP", "purple"],
                    ["Color correction", "grey"],
                ]}
            />
        </section>
    );
}

export default About;
