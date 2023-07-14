import { useEffect } from "react";

import "../../Colors.css";
import classes from "./Projects.module.css";

function ProjectJS({ img, alt, title, git, demo, tech, description }) {
  useEffect(() => {
    const placeholderDivs = document.querySelectorAll(
      `.${classes.imageWrapper}`
    );

    placeholderDivs.forEach((div) => {
      const img = div.querySelector("img");
      const loaded = () => {
        div.classList.add(`${classes.loaded}`);
      };

      if (img.complete) {
        loaded();
      } else {
        img.addEventListener("load", loaded);
      }
    });
  });

  return (
    <div className={classes.work}>
      <div className={classes.imageWrapper}>
        <img className={classes.image} src={img} alt={alt} loading="lazy" />
      </div>
      <div className={classes.info}>
        <h3>{title}</h3>
        <p className={classes.description}>{description}</p>
        <ul className={classes.list}>
          {tech.map((el) => {
            return (
              <li key={el.id} className={el.color}>
                {el.tech}
              </li>
            );
          })}
        </ul>
        <div className={classes.links}>
          <>
            <a
              className={classes.link}
              href={git}
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              className={classes.link}
              href={demo}
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </>
        </div>
      </div>
    </div>
  );
}

export default ProjectJS;
