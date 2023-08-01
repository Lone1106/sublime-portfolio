import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

import "../../Colors.css";
import classes from "./Projects.module.css";

function ProjectJS({ img, alt, title, git, demo, tech, description }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setImageLoaded(true);
    };
    image.src = img;
  }, [img]);

  return (
    <div className={classes.work}>
      <div className={classes.imageWrapper}>
        {!imageLoaded && (
          <Blurhash
            hash="L03l5OWBofayofayj[ayayj[ayj["
            width="100%"
            height="220px"
          />
        )}
        {imageLoaded && (
          <img
            className={classes.image}
            src={img}
            alt={alt}
            loading="lazy"
          />
        )}
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
