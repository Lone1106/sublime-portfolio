import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

import "../../Colors.css";
import classes from "./Projects.module.css";

function ProjectDesign({ img, alt, title, software, link, description }) {
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
          {software.map((el) => {
            return (
              <li key={el.id} className={el.color}>
                {el.software}
              </li>
            );
          })}
        </ul>
        <div className={classes.links}>
          <a
            className={classes.link}
            href={link}
            target="_blank"
            rel="noreferrer"
            data-type="download"
          >
            Behance
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectDesign;
