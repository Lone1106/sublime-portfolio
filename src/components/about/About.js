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
        prepress operator. I am learning about web technologies and design
        in my free time. On top of that I immerse myself in spanish and
        japanese as my 2nd and 3rd foreign language.
      </p>

      {Data.map((el) => {
        return <Item key={el.id} title={el.title} items={el.items} />;
      })}
    </section>
  );
}

export default About;
